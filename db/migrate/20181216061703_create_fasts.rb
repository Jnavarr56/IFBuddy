class CreateFasts < ActiveRecord::Migration[5.2]
  def change
    create_table :fasts do |t|
      t.date :start_date
      t.time :start_time
      t.boolean :start_with_fast
      t.decimal :fasting_window_length
      t.decimal :eating_window_length
      t.boolean :active

      t.timestamps
    end
  end
end
