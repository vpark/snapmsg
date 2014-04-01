class CreateMessage < ActiveRecord::Migration
  def change
    create_table :messages, id: :uuid do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.boolean :opened, default: false
      t.integer :user_id
      t.integer :timer, default: 10, null: false
      
      t.timestamps
    end
  end
end
