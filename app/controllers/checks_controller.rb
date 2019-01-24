class ChecksController < ApplicationController

    before_action :authenticate_user!

    before_action :check_in_today_params, only: [:check_in_today]

    def check_in_today

        if check_in_today_params[:command] == 'check-in-today' && check_in_today_params[:fast_id].to_i == current_user.fasts.last.id

            checking_in = Check.new

            checking_in.notes = check_in_today_params[:check_in_today_notes]

            checking_in.fast_id = check_in_today_params[:fast_id]

            calculate_streak = Fast.find(check_in_today_params[:fast_id]).checks.exists?

            if checking_in.save

                if calculate_streak

                    last_check = Check.where({fast_id: check_in_today_params[:fast_id]}).order("id DESC").offset(1).first

                    days_between = ((checking_in.created_at - last_check.created_at)/(24*60*60)).to_i

                    checking_in.update_attribute(:streak, days_between == 1 ? last_check.streak + 1 : 1)

                else

                    checking_in.update_attribute(:streak, 1)

                end

                render json: { 'return_message' => 'SUCCESS' }

            else

                render json: { 'return_message' => 'FAIL' }
            
            end

        else

            render json: { 'return_message' => 'FAIL' }

        end

    end

    def show

        fast =  Fast.find(params[:fast_id])

        @get_checks = fast.checks.order("id desc")

        if @get_checks.exists?

            @checks = @get_checks 
            
            @fast_index =  Fast.where({user_id: fast.user_id}).order(id: :asc).pluck(:id).index(fast.id) + 1

        else

            redirect_to root_path

        end

    end

    private

    def check_in_today_params

      params.require(:check_in_today_params).permit(:command, :check_in_today_notes, :fast_id)

    end

end
