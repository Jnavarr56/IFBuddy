class DashboardController < ApplicationController

  before_action :authenticate_user!

  before_action :set_new_password_params, only: [:set_new_password]

  def landing

  end

  def dash

    @user = current_user

  end

  def set_new_password

    current_user.send_reset_password_instructions

    render json: { 'sucess_message' => 'true' }

    sign_out current_user

  end

  private

    def set_new_password_params

      params.require(:set_new_password_params).permit(:command)

    end
  
end
