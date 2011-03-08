class Repo < ActiveRecord::Base
  validates :name, :presence => true
  validates :database, :presence => true
  
  # creates the repository
  def generate
    transaction do
      create_repository do
        workspace
        app_folder
        application
        #update_gemfile      
      end
      
      raise ActiveRecord::Rollback unless save
    end
    
    self.new_record? ? false : true
  end
  
  def create_repository(&block)  
    self.instance_eval &block
  end
  
  def workspace
    @workspace_path = File.expand_path(".app_builder_workspace", "~")   
    status = Dir.mkdir(@workspace_path) unless File.exists?(@workspace_path)

  end
  
  def app_folder
    application_path = File.expand_path(self.name, @workspace_path)
    status = Dir.mkdir(application_path) unless File.exists?(application_path)
  end
  
  def application    
    generate_rails_app if self.category == 'RAILS'      
    # code to generate other apps in the future
  end
  
  private
  
  def generate_rails_app
    @command = ""
    @command << "rails new #{@workspace_path}/#{self.name}/#{self.name} -f "
    identify_test_framework
    identify_js_framework
    identify_database
  
    switch_rvm_version  
    puts "#{@command}"
    system("#{@command}")


    fetch_libraries
  end
  
  def identify_test_framework
     case self.test_framework
     when "RSPEC"
       @command << "-T "
     when "TEST UNIT" 
       @command << ""
     end 
  end
  
  def identify_database
    db = case self.database      
         when "MYSQL"
           "mysql"
          when "POSTGRES"
            "postgresql"
          when "ORACLE"
            "oracle"
          end
    @command << "-d #{db}"     
  end 
  
  def identify_js_framework
    js = case self.js_framework
         when "JQUERY"
           "-J "
         when "PROTOTYPE"
           ""
         end
         
    @command << js     
  end
  
  #TODO need to automatically check if rvm exists
  def switch_rvm_version
    switch_directory
    system("rvm use 1.9.2")
  end
  
  def switch_directory(directory = "#{@workspace_path}/#{self.name}")
    Dir.chdir(directory)
  end
  
  def fetch_libraries
    if self.js_framework == "JQUERY"
      fetch_jquery_libraries      
    end    
  end
  
  def fetch_jquery_libraries    

    system("curl http://docs.jquery.com/Downloading_jQuery > #{@workspace_path}/#{self.name}/#{self.name}/public/javascripts/jquery.js")
    system("curl https://github.com/rails/jquery-ujs/raw/master/src/rails.js > #{@workspace_path}/#{self.name}/#{self.name}/public/javascripts/rails.js")
    opts = {:attribute => [
                           {:key => 'javascript_expansions', 
                           :with => ["jquery", "rails"]
                           }
                          ]
           }
    
    update_application_configuration(opts)
  end
  
  #available for expansion of other attributes later
  def update_application_configuration(opts = {})
    opts[:attribute].each do |attribute|
      if attribute[:key] == "javascript_expansions"
        modify_file('config/application.rb', attribute[:key], attribute[:with])
      end
    end       
  end  


  def modify_file(filename, key, with) 
      file_text = ""
      file_path = "#{@workspace_path}/#{self.name}/#{self.name}/#{filename}"
  
      File.open("#{@workspace_path}/#{self.name}/#{self.name}/#{filename}", "r") do |f2|
        while line = f2.gets
          if line.include?(key)
            file_text << "config.action_view.javascript_expansions[:defaults] = %w(#{with.join(', ')})"
          else
            file_text << line
          end
        end      
      end
      
    File.open("#{@workspace_path}/#{self.name}/#{self.name}/#{filename}.bk", "w") do |f|
        f.write(file_text)
    end  
    
    File.delete("#{@workspace_path}/#{self.name}/#{self.name}/#{filename}")
    File.rename("#{@workspace_path}/#{self.name}/#{self.name}/#{filename}.bk", "#{@workspace_path}/#{self.name}/#{self.name}/#{filename}")
  end

end
