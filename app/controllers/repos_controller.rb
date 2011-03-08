class ReposController < ApplicationController
  def index
  end

  def new
    @repo = Repo.new
  end

  def create
    @repo = Repo.new(params[:repo])
    if @repo.generate
      flash[:notice] = 'Your repository has been created'
      redirect_to repo_url(@repo)
    else
      flash.now[:error] = 'Please fill in the required fields'
      render "new"
    end      
  end

  def edit
  end

  def show
  end

  def update
  end

  def destroy
  end

end
