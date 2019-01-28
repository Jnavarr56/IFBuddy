class AddSignedUpWithOAuthToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :signed_up_with_oauth, :boolean
  end
end
