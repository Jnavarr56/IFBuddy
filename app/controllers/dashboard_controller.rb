class DashboardController < ApplicationController

  before_action :authenticate_user!, only: [:dash, :set_new_password, :account_update_password_precheck]

  before_action :set_new_password_params, only: [:set_new_password]

  before_action :account_update_password_precheck_params, only: [:account_update_password_precheck]

  before_action :check_password_sign_up_params, only: [:check_password_sign_up]

  before_action :check_password_login_params, only: [:check_password_login]

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

  def check_password_sign_up

    if User.where({email: check_password_sign_up_params[:email]}).exists?

      render json: { "return_message" =>  "FAIL DUE TO EMAIL TAKEN" }

    else

      render json: { "return_message" =>  "#{EmailAddress.valid?(check_password_sign_up_params[:email]) ? "SUCCESS" : "FAIL DUE TO EMAIL"}" }

    end 

  end

  def check_password_login

    if !User.where({email: check_password_login_params[:email]}).exists?

      render json: { "return_message" =>  "FAIL" }

    elsif User.where({email: check_password_login_params[:email]}).first.signed_up_with_oauth

      render json: { "return_message" =>  "WARN", "provider" => User.where({email: check_password_login_params[:email]}).first.provider }

    elsif User.where({email: check_password_login_params[:email]}).first.valid_password?(check_password_login_params[:password])

      render json: { "return_message" =>  "SUCCESS" }

    else

      render json: { "return_message" =>  "FAIL" }

    end

  end

  private

    def set_new_password_params

      params.require(:set_new_password_params).permit(:command)

    end

    def account_update_password_precheck_params

      params.require(:account_update_password_precheck_params).permit(:command, :p)
  
    end

    def check_password_sign_up_params

      # Use strong params to unsure only the inputs from the forms are passed through.
      params.require(:check_password_sign_up_params).permit(:command, :email)
  
    end

    def check_password_login_params

      # Use strong params to unsure only the inputs from the forms are passed through.
      params.require(:check_password_login_params).permit(:command, :email, :password)
  
    end
  
end
