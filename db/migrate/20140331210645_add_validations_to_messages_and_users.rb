class AddValidationsToMessagesAndUsers < ActiveRecord::Migration
  def change
    change_column :messages, :title, :string, null: false
    change_column :messages, :content, :text, null: false
    change_column :messages, :user_id, :integer, null: false
    change_column :messages, :timer, :integer, null: false, default: 1
    
    change_column :users, :email, :string, unique: true
  end
end
