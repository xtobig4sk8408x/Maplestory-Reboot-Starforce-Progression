class ModeratorController < ApplicationController
    before_action :require_moderator
    
    private 

    def require_moderator
        unless current_user&.moderator? 
            redirect_to root_path, alert: "You must be a moderator to access this page", unless current_user.admin?
        end
    end
end
