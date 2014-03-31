class AddTimerToMessage < ActiveRecord::Migration
  def change
    add_column :messages, :timer, :integer
  end
end
