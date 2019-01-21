Rails.application.routes.draw do

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

  resources :fasts #<- Draw all the standard routes for our Fast model.

end


