require 'spec_helper'

describe ReposController do
  render_views

  before(:each) do
    @repo = Factory.build(:repo)
  end

  context "its should load the form to create a new repository" do
    describe "GET/ 'new" do
      it "should render the right page" do
        get 'new'
        response.should have_selector("title", :content => "App Builder | new")        
      end      
    end    
  end

  context "create a new repository" do
    context "Successfully" do
      describe "POST/ 'create'" do
        it "should create a new repository" do
          count = Repo.count
          post :create, :repo => @repo.attributes
          Repo.count.should eql(count + 1)
          response.should redirect_to(repo_url(assigns[:repo]))          
        end
      end
    end
    
    context "Unsuccessfully" do
      describe "POST/ 'create'" do
        it "should not create a new repo and show the new page"
      end
    end
  end


end
