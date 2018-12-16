class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController

    def all

        user = User.from_omniauth(request.env["omniauth.auth"])

        if user.persisted? 

          session[:user_id] = user.id

          sign_in_and_redirect user, event: :authentication #this will throw if @user is not activated

          set_flash_message(:notice, :success, kind: user.provider == "facebook" ? user.provider.capitalize : "Google") if is_navigational_format?

        else

          session["devise.user_attributes"] = user.attributes

        end
        
    end

    alias_method :facebook, :all
    alias_method :google_oauth2, :all

end