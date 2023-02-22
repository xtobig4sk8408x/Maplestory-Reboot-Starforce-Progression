class Job < ApplicationRecord
    validates :job 
    validates :base_job 
    validates :origin
end
