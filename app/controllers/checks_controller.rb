class ChecksController < ApplicationController

    before_action :authenticate_user!

    before_action :check_in_today_params, only: [:check_in_today]

    def check_in_today

        if check_in_today_params[:command] == 'check-in-today' && check_in_today_params[:fast_id].to_i == current_user.fasts.last.id

            checking_in = Check.new

            checking_in.notes = check_in_today_params[:check_in_today_notes]

            checking_in.fast_id = check_in_today_params[:fast_id]

            if checking_in.save

                render json: { 'return_message' => 'SUCCESS' }

            else

                render json: { 'return_message' => 'FAIL' }
            
            end

        else

            render json: { 'return_message' => 'FAIL' }

        end

    end

    private

    def check_in_today_params

      params.require(:check_in_today_params).permit(:command, :check_in_today_notes, :fast_id)

    end

end
