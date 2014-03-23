class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :title
      t.text :content
      t.boolean :viewed
      t.integer :user_id
      
      t.timestamps
    end
  end
end
