Rails.application.routes.draw do

  resources :checks
  #Let devise handle the routes for authentication and OAuth.
  devise_for :users, controllers: { 
    
    omniauth_callbacks: 'users/omniauth_callbacks',

    passwords: 'users/passwords',

    registrations: 'users/registrations'

  }

  devise_scope :user do

    unauthenticated do
      root :to => "dashboard#landing" #<- If user not logged in go to landing.
    end

    authenticated do
      root :to => "dashboard#dash" #<- If user in go to dashboard.
    end

  end

  post "set-new-password", to: "dashboard#set_new_password"

  post "end-current-fast", to: "fasts#end_current_fast"

  post "account-update-password-precheck", to: "dashboard#account_update_password_precheck"

  post "check-in-today", to: "checks#check_in_today"

  get "/fasts/:fast_id/checks", to: "checks#show"
  
  post "/check-password-sign-up", to: "dashboard#check_password_sign_up"

  post "/check-password-login", to: "dashboard#check_password_login"

  resources :fasts #<- Draw all the standard routes for our Fast model.

  #get "/fasts", to: "fasts#index"

  #get "/fasts/new", to: "fasts#new"

end


