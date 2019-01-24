class FastsController < ApplicationController

    # Make sure user is logged in before doing anything related to fasts.
    before_action :authenticate_user!

    before_action :end_current_fast_params, only: [:end_current_fast]

    def new

        @fast = Fast.new

    end

    def create

        # If there is already a fast record with with active set to true make it false (custom method in User model).
        current_user.nullify_last_fast_if_needed

        # Create a new fast object with sanitized params from the user and then add our default values (user_id and active).
        # See below for the definition of fast_params and how I whitelisted the necessary params.
        @fast = Fast.new(fast_params.merge(user_id: current_user.id, active: true))
        
            
        if @fast.save

            redirect_to root_path #<- If save occurs properly then go to the home page.
        
        else 

            render :new 
            # If save cannot be completed rerender the "new" view with errors as a property of @fast
            # that can be accessed in this view (See the shared partial).
            
        end

    end

    def end_current_fast

        if end_current_fast_params[:command] == "end-current-fast"

            current_user.kill_last_fast

            render json: { "return_message" =>  "#{!current_user.fasts.last.active ? "SUCCESS" : "FAIL"}" }

        else

            render json: { "return_message" => "FAIL" }

        end

    end

    def index

        @fasts = current_user.fasts.order("id DESC")

        

        if !@fasts.exists?

            redirect_to root_path

        end

    end

    

    private

        def fast_params

            # Use strong params to unsure only the inputs from the forms are passed through.
            params.require(:fast).permit(:start_date, :start_time, :start_with_fast, :fasting_window_length, :eating_window_length)
                
        end

        def end_current_fast_params

            # Use strong params to unsure only the inputs from the forms are passed through.
            params.require(:end_current_fast_params).permit(:command)
                
        end

end
