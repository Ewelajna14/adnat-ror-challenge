class Shift < ApplicationRecord
    attr_accessor :date, :start_time, :finish_time

    belongs_to :user



end
