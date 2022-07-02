class User < ApplicationRecord
    belongs_to :organization, optional: true
    has_many :shifts, dependent: :destroy

    validates :name, presence: true
    validates :email_address, presence: true
    validates :password, length: { minimum: 6}, on: :create
  
    has_secure_password

end
