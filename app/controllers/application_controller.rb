class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordInvalid, with: :not_valid
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::Record
before_action :authorized_user

#current_user and authorized_user are used to make sure the user is authorized before using the website
  def current_user 
    user = User.find_by(id: session[:id])
  end

  private 

  def authorized_user
    @current_user = User.find_by(id: session[:user_id])
    render json: {errors: "Not Authorized"}, status: :unauthorized unless @current_user  
  end

  def not_valid(error)
    render json: {errors: error.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found(error)
    render json: {error: error.model + " not found"}, status: :not_found
  end


end
