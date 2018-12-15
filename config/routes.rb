Rails.application.routes.draw do
  get 'dashboard/landing'
  get 'dashboard/dash'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html



  #Last left off here
  #-----------------------------------------
  devise_scope :user do

    unauthenticated do
      root :to => "dashboard#landing"
    end

    authenticated do
      root :to => "dashboard#dash"
    end

  end
  #-----------------------------------------



end


