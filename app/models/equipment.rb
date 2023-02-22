class Equipment < ApplicationRecord
    has_many :stats
    has_many :equipment_reviews 
    has_many :users, through: :equipment_review
end
