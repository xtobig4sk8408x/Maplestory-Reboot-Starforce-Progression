class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:login]
    
    # def show 
    #     user = find_id
    #     render json: user 
    # end

    def login
        user = find_id
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :ok
        else 
            render json: {error: "Incorrect username or password"}, status: :unauthorized
        end
    end

    def logout
        session.delete :user_id 
        head :no_content
    end

    private 

    def find_id 
        User.find_by(email:params[:email])
    end
end
