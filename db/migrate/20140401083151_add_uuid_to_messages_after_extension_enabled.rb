class AddUuidToMessagesAfterExtensionEnabled < ActiveRecord::Migration
  def change
    remove_column :messages, :id
    add_column :messages, :id, :uuid, primary_key: true
  end
end
