class Fast < ApplicationRecord

    belongs_to :user

    validates :start_date, :start_time, :start_with_fast, :fasting_window_length, :eating_window_length, :active, :user_id, presence: true

end
