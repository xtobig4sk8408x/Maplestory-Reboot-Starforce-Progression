class UsersController < ApplicationController
  # skip_before_action :authorized_user, only: [:create]

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id 
    render json: user, status: :created
  end

  def show
    render json: @current_user, status: :ok
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
