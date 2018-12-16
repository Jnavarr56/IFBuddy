class AddUserIdToFasts < ActiveRecord::Migration[5.2]
  def change
    add_column :fasts, :user_id, :integer
  end
end
