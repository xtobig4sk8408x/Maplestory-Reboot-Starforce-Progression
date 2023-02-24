class EquipmentReviewsController < ApplicationController
    def index 
        reviews = EquipmentReview.all
        render json: reviews, status: :ok
    end

end
