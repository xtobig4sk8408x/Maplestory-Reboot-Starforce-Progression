class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def create
    @user = User.new(user_params)
    render json: @user, status: :created 
  end

  def show
    user = find_user
    render json: user, status: :ok
  end

  def index
    users = User.all
    render json: users, status: :ok
  end

  def update
    user = find_user
    user.update(user_params)
    render json: user
  end

  def destroy
    user = find_user
    user.destroy
    head :no_content
  end

  private
    
    def find_user
      User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:name, :email, :password, :first_name, :last_name, :username)
    end
end
