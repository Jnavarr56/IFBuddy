Rails.application.routes.draw do

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  devise_scope :user do

    unauthenticated do
      root :to => "dashboard#landing"
    end

    authenticated do
      root :to => "dashboard#dash"
    end

  end

  resources :fasts

end


