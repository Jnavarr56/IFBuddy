# IFBuddy :alarm_clock: :hamburger:


IFBuddy is a mostly responsive full stack web app for tracking Intermittent Fasting schedules and saving fast schedule data.

[ifbuddy.herokuapp.com](ifbuddy.herokuapp.com)

###### IFBuddy is deployed on Heroku and uses:

  - Amazon Web Services (S3)
  - Facebook OAuth API
  - Google Contacts OAuth API
  - PostgreSQL
  - BootStrap 4
  - jQuery 3
  
###### Other libraries/frameworks/etc include:
- [Devise](https://www.google.com) - Flexible MVC based user authentication solution for Rails.
- [Moment.js](https://momentjs.com/) - A lightweight JavaScript date library for parsing, manipulating, and formatting dates (display dates in users timezone)
- [Email Address](https://github.com/afair/email_address) - A Ruby gem for validiting email addresses.

## User Features

*Screen shots coming soon!*

  - Create Intermittent Fasting Schedules, beginning with either Fasting or Eating windows
  - Log on at any time while in a Fast Schedule to see if user should be eating or fasting, and how long until the next window.
  - Check in once a day, with the option of including a note.
  - View and sort history of attempted fast schedules along with summary statistics and daily check in notes.
  - Download selected fast history data in CSV format.
  - Sign up with Google or Facebook, or by making an account
  - Customize account info, including profile picture

## Development

IFBuddy uses Rails 5.2.2 with a PostgreSQL adapter and an AMS S3 bucket with Active Storage to store images.

My specs at the time of deployment (01/27/2019) are here:

```
Rails version             5.2.2
Ruby version              2.5.1-p57 (x86_64-darwin17)
RubyGems version          2.7.6
Rack version              2.0.6
JavaScript Runtime        Node.js (V8)
Middleware                Rack::Sendfile, ActionDispatch::Static, ActionDispatch::Executor, ActiveSupport::Cache::Strategy::LocalCache::Middleware, Rack::Runtime, Rack::MethodOverride, ActionDispatch::RequestId, ActionDispatch::RemoteIp, Sprockets::Rails::QuietAssets, Rails::Rack::Logger, ActionDispatch::ShowExceptions, WebConsole::Middleware, ActionDispatch::DebugExceptions, ActionDispatch::Reloader, ActionDispatch::Callbacks, ActiveRecord::Migration::CheckPending, ActionDispatch::Cookies, ActionDispatch::Session::CookieStore, ActionDispatch::Flash, ActionDispatch::ContentSecurityPolicy::Middleware, Rack::Head, Rack::ConditionalGet, Rack::ETag, Rack::TempfileReaper, Warden::Manager, OmniAuth::Strategies::Facebook, OmniAuth::Strategies::GoogleOauth2
Application root          /Users/jorgenavarro/Desktop/IFBuddy
Environment               development
Database adapter          postgresql
Database schema version   20190127140558
```

In **config/application.rb**, the following code allows for storing environment variables (used for various credentials) to be stored in a **config/local_env.yml** file.

```ruby
 module IFBuddy
 
  class Application < Rails::Application
  
    config.load_defaults 5.2
    
    # Allows us to use our variables in local_env.yml as environment variables.
    # See this link for steps: https://qiita.com/alokrawat050/items/0d7791b3915579f95791
    config.before_configuration do
      env_file = File.join(Rails.root, 'config', 'local_env.yml')
      YAML.load(File.open(env_file)).each do |key, value|
        ENV[key.to_s] = value
      end if File.exists?(env_file)
    end
  
  end
end
```

The local_env.yml file would look like this:
```ruby
GMAIL_USERNAME: 'APP EMAIL GOES HERE'
GMAIL_PASSWORD: 'PASSWORD GOES HERE'

FB_APP_ID: 'FACEBOOK APP ID GOES HERE'
FB_APP_SECRET: 'FACEBOOK APP SECRET KEY GOES HERE' 

GOOGLE_APP_ID: 'GOOGLE APP ID GOES HERE'
GOOGLE_APP_SECRET: 'GOOGLE APP SECRET GOES HERE'

AMAZON_ACCESS_ID: 'AMAZON_ACCESS_ID GOES HERE'
AMAZON_SECRET: 'AMAZON_SECRET GOES HERE'
AMAZON_S3_BUCKET_REGION: 'AMAZON_S3_BUCKET_REGION GOES HERE'
AMAZON_S3_BUCKET: 'AMAZON_S3_BUCKET_REGION GOES HERE'
```

After cloning, add a **config/local_env.yml** file matching what is above and substitute in credentials.

Then run:

```sh
$ bundle install
$ rails db create
$ rails db migrate
$ rails s
```


