class User < ApplicationRecord
    belongs_to :organization, optional: true
    has_many :shifts

    validates :name, presence: true
    validates :email_address, presence: true
    validates :password, length: {minimum: 6}
  
    has_secure_password

end
