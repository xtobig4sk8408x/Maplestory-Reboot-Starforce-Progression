class EquipmentReview < ApplicationRecord
    belongs_to :equip
    belongs_to :user
    validates :description, length: {in: 10..500}
end
