require 'spec_helper'

module RepoHelperMethods
  def create_jquery_mysql_rspec_app
    @repo.database = "MYSQL"
    @repo.js_framework = "JQUERY"
    @repo.test_framework = "RSPEC"
    @repo.workspace
    @repo.app_folder
    @repo.application
  end
end

describe Repo do  
  include RepoHelperMethods
  
  before(:each) do
    @repo = Factory.build(:repo)
  end
  
  context "Validations" do
    it "should have one error on name" do
      @repo.name = ""
      @repo.should_not be_valid
      @repo.should have(1).error_on(:name)
    end
    
    it "should have a database if its a RAILS project" do
      @repo.category = 'RAILS'
      @repo.database = ''
      @repo.should_not be_valid
      @repo.should have(1).error_on(:database)
    end    
  end
  
  context "Repository Creation" do
    it "should create a workspace" do
      @repo.stub!(:fetch_libraries).and_return(true)
      @repo.generate
      workspace_path = File.expand_path(".app_builder_workspace", "~")
      File.exists?(workspace_path).should == true
      File.directory?(workspace_path).should == true
    end
    
    it "should create the application folder" do
      @repo.stub!(:fetch_libraries).and_return(true)
      @repo.generate
      workspace_path =  File.expand_path(".app_builder_workspace", "~")
      File.exists?(File.expand_path("#{@repo.name}", workspace_path)).should == true
    end
    
    it "should generate a rails application" do
      @repo.stub!(:fetch_libraries).and_return(true)
      create_jquery_mysql_rspec_app
      workspace_path =  File.expand_path(".app_builder_workspace", "~")
      @repo.instance_eval { @command }.should eql("rails new #{workspace_path}/#{@repo.name}/#{@repo.name} -f -T -J -d mysql")      
    end
    
    context "update Jquery expansions when JQUERY is used" do
      it "should add jquery and rails.js to the application.rb configurations in the javascript expansion" do
        create_jquery_mysql_rspec_app
        
        workspace_path =  File.expand_path(".app_builder_workspace", "~")
        js_config = nil
        File.open("#{workspace_path}/#{@repo.name}/#{@repo.name}/config/application.rb", "r") do |f|
          while line = f.gets
            puts line
            js_config = line if line.include?("config.action_view.javascript_expansions")
          end
        end        
        
        js_config.chomp.should eql("config.action_view.javascript_expansions[:defaults] = %w(jquery, rails)")
      end
    end
    
    
    it "should create a local git repository" do
      
    end
    
    it "should add required gems"
    it "should push the project to git"
    it "should save the repository"
  end
end
