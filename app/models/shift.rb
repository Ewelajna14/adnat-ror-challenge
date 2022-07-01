class Shift < ApplicationRecord
    belongs_to :user
    

    validates :break_length, numericality: { only_integer: true }
    validates :start, presence: true
    validates :finish, presence: true
   
end
