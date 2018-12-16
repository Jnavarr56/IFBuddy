class FastsController < ApplicationController

    #Make sure user is logged in before doing anything related to fasts.
    before_action :authenticate_user!

    def new

        @fast = Fast.new

    end


    def create

        #Create a new fast object with params from the user.
        @fast = Fast.new(fast_params.merge(user_id: current_user.id, active: true))
        
        if @fast.save
            
            puts "Saved Fast!"
        
        else 

            puts "problem!"
        end

    end

    private

        def fast_params

            #Permit only the the inputs sent by the user.
            #Require the :fast obj, and all its attributes.
            params.require(:fast).permit(:start_date, :start_time, :start_with_fast, :fasting_window_length, :eating_window_length)
                

        end

end
