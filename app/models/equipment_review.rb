class EquipmentReview < ApplicationRecord
    belongs_to :equipment 
    belongs_to :user
    validates :description, length: {in: 10..500}
end
