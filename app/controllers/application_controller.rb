class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity 
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found


#before_action runs before all actions
before_action :authorized_user

#current_user and authorized_user are used to make sure the user is authorized before using the website
  def current_user 
    user = User.find_by(id: session[:id])
    byebug 
    user
  end

  def authorized_user
    render json: {errors: "Not Authorized"}, status: :unauthorized, 
    unless current_user

  end

end
