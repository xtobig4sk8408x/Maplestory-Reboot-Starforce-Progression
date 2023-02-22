class JobReview < ApplicationRecord
    belongs_to :job
    validates :description, length: {in: 10..500}
end
