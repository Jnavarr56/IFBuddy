class ApplicationController < ActionController::Base

    #This method will fire before Devise creates a user or updates a user to allow our extra registration fields and attachment.
    before_action :configure_permitted_parameters, if: :devise_controller?

    #This method deletes the user's old photo attachment before attaching a new one to avoid has_one conflict.
    before_action :purge_old_image, only: [:update], if: :devise_controller?


    protected


    def configure_permitted_parameters

      #These work because when updating, it will use the all of the keys in the entire params hash.
      #See page 50.
      
      devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :uploaded_profile_pic])
      
      devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :uploaded_profile_pic])
      
    end

    def purge_old_image

      if !current_user.nil?
        
        current_user.uploaded_profile_pic.purge

      end

    end

end
