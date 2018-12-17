Rails.application.routes.draw do

  #Let devise handle the routes for authentication and OAuth.
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  devise_scope :user do

    unauthenticated do
      root :to => "dashboard#landing" #<- If user not logged in go to landing.
    end

    authenticated do
      root :to => "dashboard#dash" #<- If user in go to dashboard.
    end

  end

  resources :fasts #<- Draw all the standard routes for our Fast model.

end


