class User < ApplicationRecord  

  has_many :fasts, dependent: :destroy

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



  def dash_initial_fast_display_text

    if self.fasts.empty?

      "You haven't begun a fast schedule yet."

    elsif !self.fasts.last.active

      "You do not currently have an active fast schedule."

    else

      #If user has an active fast we should change this to something more interesting.
      "Your current fast schedule is #{self.fasts.last.fasting_window_length}/#{self.fasts.last.eating_window_length}."
    
    end

  end


  def dash_new_fast_link_text

    if self.fasts.empty?

      "Start Your First Fast Schedule"
    
    else

      "Start a New Fast Schedule"
    
    end

  end


end


        
