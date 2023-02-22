class User < ApplicationRecord
    has_secure_password 
    has_many :equipment_reviews
    has_many :equipment, through: :equipment_reviews
    validates :email, presence: true 
    validates :first_name, presence: true 
    validates :last_name, presence: true 
    validates :password, presence: true, length: {in: 4..32}

    #Create admin/mod/basic users 
    enum role: [:user, :moderator, :admin]
    #password regex
    validates :email, presence: :true, uniqueness: true, format: {with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i}

    def password=(new_password)
        self.password_digest = hash(new_password)
    end

    private 
    
    def hash(input)
        input.bytes.reduce(:+)
    end
end
