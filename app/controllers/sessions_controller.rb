class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:create]
    def show 
        user = User.find(session[:user_id]) 
        render json: user 
    end

    def create 
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created
        else 
            render json: {error: "Incorrect username or password"}, status: :unprocessable_entity
        end
    end

    def destroy 
        session.delete :user_id 
        head :no_content, 
    end
end
