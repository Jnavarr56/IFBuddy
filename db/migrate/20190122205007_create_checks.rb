class CreateChecks < ActiveRecord::Migration[5.2]
  def change
    create_table :checks do |t|
      t.integer :fast_id
      t.text :notes

      t.timestamps
    end
  end
end
