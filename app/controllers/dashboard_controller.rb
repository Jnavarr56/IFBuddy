class DashboardController < ApplicationController

  def landing
  end

  def dash

    @user = current_user

  end

  def set_new_password

    puts params
    puts params.inspect
    puts params.inspect
    puts params.inspect

  end
  
end
