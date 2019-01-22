class DashboardController < ApplicationController

  before_action :authenticate_user!

  before_action :set_new_password_params, only: [:set_new_password]

  before_action :account_update_password_precheck_params, only: [:account_update_password_precheck]

  def landing

  end

  def dash

    @user = current_user

  end

  def set_new_password

    if set_new_password_params[:command] == "set_new_password_from_social_sign_up"

      current_user.send_reset_password_instructions

      render json: { 'return_message' => 'SUCCESS' }
  
      sign_out current_user
    
    else

      render json: { 'return_message' => 'FAIL' }

    end

  end

  def account_update_password_precheck

    render json: { "return_message" =>  "#{current_user.valid_password?(account_update_password_precheck_params[:p]) ? "SUCCESS" : "FAIL"}" }
  
  end

  private

    def set_new_password_params

      params.require(:set_new_password_params).permit(:command)

    end

    def account_update_password_precheck_params

      params.require(:account_update_password_precheck_params).permit(:command, :p)
  
    end
  
end
