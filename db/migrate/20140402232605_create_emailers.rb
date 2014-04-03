class CreateEmailers < ActiveRecord::Migration
  def change
    create_table :emailers do |t|

      t.timestamps
    end
  end
end
