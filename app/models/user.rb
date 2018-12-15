require 'securerandom'


class User < ApplicationRecord  

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable, :omniauthable, omniauth_providers: %i[facebook google_oauth2]


  def self.from_omniauth(auth, signed_in_resource = nil)

    user = User.where(provider: auth.provider, uid: auth.uid).first


    if user.present?

      user.update_column(:img, auth.extra.raw_info.picture.data.url)

      user
    else
            # Check wether theres is already a user with the same 
            # email address
      user_with_email = User.find_by_email(auth.info.email)
      
      if user_with_email.present?

        user = user_with_email

      else

        user = User.new
                
        if auth.provider == "facebook"

          user.provider = auth.provider
          user.uid = auth.uid

          user.password = Devise.friendly_token[0,20]

          user.email = auth.extra.raw_info.email        
          user.first_name = auth.extra.raw_info.first_name
          user.last_name = auth.extra.raw_info.last_name
          user.dob = DateTime.strptime(auth.extra.raw_info.birthday, "%m/%d/%Y")
          user.img = auth.extra.raw_info.picture.data.url
          
          user.skip_confirmation!

          user.save

        elsif auth.provider == "google_oauth2"
             
          user.provider = auth.provider
          user.uid = auth.uid
       
          user.first_name = auth.info.first_name
          user.last_name = auth.info.last_name
          user.email = auth.info.email

          user.password = Devise.friendly_token[0,20]

          user.skip_confirmation!

          user.save
        end

      end    
      
    end

  return user

  end   

end


        
