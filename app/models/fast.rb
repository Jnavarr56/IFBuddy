class Fast < ApplicationRecord

    belongs_to :user
    has_many :checks, dependent: :destroy

    validates :start_date, :start_time, :fasting_window_length, :eating_window_length, :active, :user_id, presence: true

    # Returns an hash that will return a string (:status) indicating
    # if user should be fasting or if user should be eating.
    # Also, hash has date string (:date_until) that indicates the 
    # date time at which the current window will end.
    def current_status
        
        full_current_obj = DateTime.now.change({:offset => "+0000"})
        
        s_d = self.start_date.to_s.split("-").map { |n| n.to_i } 

        s_t = self.start_time.to_s.split(" ")[1].split(":").map { |n| n.to_i }

        full_start_obj = DateTime.new(s_d[0], s_d[1], s_d[2], s_t[0], s_t[1], s_t[2]).change({:offset => "+0000"})

        full_days_since = (full_current_obj - full_start_obj).to_i

        legal_eating = full_days_since + (self.eating_window_length / 24).to_f

        legal_fasting = full_days_since + (self.fasting_window_length / 24).to_f

        current_station =  (full_current_obj - full_start_obj).to_f

        if self.start_with_fast

            if current_station >= full_days_since && current_station <= legal_fasting

                #Fasting

                hours_until_fast_over = 24 * (legal_fasting - current_station)

                date_of_fast_end = full_current_obj + hours_until_fast_over.hours

                action = "Fasting"

                future_date = date_of_fast_end.strftime('%a, %d %b %Y %T')
            
            elsif current_station > legal_fasting && current_station <= full_days_since + 1

                #Eating

                hours_until_eating_over = 24 * (full_days_since + 1 - current_station)

                date_of_eating_end = full_current_obj + hours_until_eating_over.hours

                action = "Eating"

                future_date = date_of_eating_end.strftime('%a, %d %b %Y %T')

            end

        else

            if current_station > full_days_since && current_station < legal_eating

                #Eating

                hours_until_eating_over = 24 * (legal_eating - current_station)

                date_of_eating_end = full_current_obj + hours_until_eating_over.hours

                action = "Eating"

                future_date = date_of_eating_end.strftime('%a, %d %b %Y %T')
            
            elsif  current_station > legal_eating && current_station < full_days_since + 1
                
                #Fasting

                hours_until_fast_over = 24 * (full_days_since + 1 - current_station)

                date_of_fast_end = full_current_obj + hours_until_fast_over.hours

                action = "Fasting"

                future_date = date_of_fast_end.strftime('%a, %d %b %Y %T')

            end

        end
        
        return {:status => action, :date_until => future_date}

    end

    # Returns true if fast instance's start date has passed,
    # false otherwise.
    def has_started 

        full_current_obj = DateTime.now.change({:offset => "+0000"})
        
        s_d = self.start_date.to_s.split("-").map { |n| n.to_i } 

        s_t = self.start_time.to_s.split(" ")[1].split(":").map { |n| n.to_i }

        full_start_obj = DateTime.new(s_d[0], s_d[1], s_d[2], s_t[0], s_t[1], s_t[2])

        full_current_obj >= full_start_obj

    end

    def kill_fast

        self.update_attribute(:active, false)

    end

    def get_start_date_obj

        Time.utc(self.start_date.year, self.start_date.month, self.start_date.day, self.start_time.hour.to_i, self.start_time.strftime("%M").to_i, self.start_time.strftime("%S").to_i)

    end

    def max_streak

        self.checks.exists? ? self.checks.maximum(:streak) : 0
        
    end

    def total_days

        #self.update

    end

end

