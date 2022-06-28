class User < ApplicationRecord
    belongs_to :organization
    has_many :shifts

    validates :name, presence: true
    validates :email_address, presence: true
  
    has_secure_password
    
end
