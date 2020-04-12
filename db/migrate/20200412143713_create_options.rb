class CreateOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :options do |t|
      t.string :title, null: false
      t.integer :poll_id, null: false
      t.integer :count, null: false
      t.timestamps
    end
    add_index :options, :poll_id
  end
end
