class DashboardController < ApplicationController
  def landing
  end

  def dash

    @user = current_user

    puts @user.img

  end
end
