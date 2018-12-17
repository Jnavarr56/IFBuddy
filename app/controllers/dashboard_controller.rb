class DashboardController < ApplicationController

  def landing
  end

  def dash

    @user = current_user
    
  end
  
end
