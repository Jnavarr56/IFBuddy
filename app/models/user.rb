class User < ApplicationRecord  

  has_many :fasts, dependent: :destroy
  has_one_attached :uploaded_profile_pic

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and 
  devise :database_authenticatable, :registerable,                #|---MAKE SURE TO TURN ON OMNIAUTHABLE AND STATE PROVIDERS---|
         :recoverable, :rememberable, :validatable, :confirmable, :omniauthable, omniauth_providers: %i[facebook google_oauth2]

  def self.from_omniauth(auth, signed_in_resource = nil)

    #Try to find user by uid (special id given to user by auth provider).
    user_by_uid = User.where(provider: auth.provider, uid: auth.uid).first

    #If cannot find user by uid, search for user by the email given by the auth provider.
    user = user_by_uid.present? ? user_by_uid : User.find_by_email(auth.info.email)

    #If the search for user by the email given by the auth provider does not yield anything then create the account using info derived from each provider.
    if !user.present?
      
      user = User.new #Create new class instance.
      
      if auth.provider == "facebook"

        user.email = auth.extra.raw_info.email        
        user.first_name = auth.extra.raw_info.first_name
        user.last_name = auth.extra.raw_info.last_name
        user.dob = DateTime.strptime(auth.extra.raw_info.birthday, "%m/%d/%Y") #Get birthday as string from provider, convert to date object and give value to user's 'dob' field.


      elsif auth.provider == "google_oauth2"

        user.first_name = auth.info.first_name
        user.last_name = auth.info.last_name
        user.email = auth.info.email
        
        #Can't figure out how to get birthday from Google.

      end

      user.skip_confirmation! #Don't require email confirmation for this new user.

      user.password = Devise.friendly_token[0,20] #Generate password for new user.

      user.save #Save this new user to the database.
      
    end

    user.update_columns(provider: auth.provider, uid: auth.uid, img: auth.info.image)
    
    user

  end

  def nullify_last_fast_if_needed

    # Make last fast record have an active value of false in the event that there is an active fast.
    if !self.fasts.empty? && self.fasts.last.active 

      self.fasts.last.update_column(:active, false)

    end

  end


  
  def dash_initial_fast_display_text
    # Return initial header text for user dashboard based on status of associated Fast records.

    if self.fasts.empty?

      "You haven't begun a fast schedule yet."

    elsif !self.fasts.last.active

      "You do not currently have an active fast schedule."

    else

      
      "Your current fast schedule is #{self.fasts.last.fasting_window_length}/#{self.fasts.last.eating_window_length}."
    
    end

  end


  def dash_new_fast_link_text
    # Return text link to fasts#new based in on status of associated Fast records.

    if self.fasts.empty?

      "Start Your First Fast Schedule"
    
    else

      "Start a New Fast Schedule"
    
    end

  end
  
  def return_user_img
    # Returns appropriate html/erb element for user's profile picture based on if has uploaded_profile_pic or img fields.

    if self.uploaded_profile_pic.attached?

      ApplicationController.helpers.image_tag(
        
        Rails.application.routes.url_helpers.rails_blob_path(self.uploaded_profile_pic, only_path: true),

        id: 'current-account-pic'

      )

    elsif self.img?

      ApplicationController.helpers.image_tag(

        self.img, 
        
        id: 'current-account-pic'
      )
    
    else

      "<i id = 'current-account-pic' class='fas fa-user'></i>".html_safe #<- Render a generic sillouhette.

    end

  end


end


        
