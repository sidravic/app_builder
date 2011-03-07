require 'spec_helper'

describe ReposController do
  render_views

  context "its should create a new repository" do
    describe "GET/ 'new" do
      it "should render the right page" do
        get 'new'
        response.should have_selector("title", :content => "App Builder | new")        
      end      
    end    
  end
  

end
