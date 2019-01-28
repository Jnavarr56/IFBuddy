class AddStreakToCheck < ActiveRecord::Migration[5.2]
  def change
    add_column :checks, :streak, :integer
  end
end
