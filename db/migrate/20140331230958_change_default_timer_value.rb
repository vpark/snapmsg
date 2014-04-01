class ChangeDefaultTimerValue < ActiveRecord::Migration
  def change
    change_column :messages, :timer, :integer, default: 10
  end
end
