class Check < ApplicationRecord

    belongs_to :fast

    validates :notes, :fast_id, presence: true

    def format_time_since_check

        if (Time.now - self.updated_at) < 60 

            "#{((Time.now - self.updated_at)).round(1)} seconds ago"

        elsif (Time.now - self.updated_at) / (60) < 60

            "#{((Time.now - self.updated_at) / (60)).round(1)} minutes ago" 

        elsif (Time.now - self.updated_at) / (60 * 60) < 24

            "#{((Time.now - self.updated_at) / (60 * 60)).round(1)} hours ago" 

        else

            "#{((Time.now - self.updated_at) / (60 * 60 * 24)).round(1)} days ago"

        end

    end

end
