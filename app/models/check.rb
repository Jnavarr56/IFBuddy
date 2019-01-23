class Check < ApplicationRecord

    belongs_to :fast

    validates :notes, :fast_id, presence: true

end
