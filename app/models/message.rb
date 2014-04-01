class Message < ActiveRecord::Base
  belongs_to :user
  # include ActiveUUID::UUID
  # default_scope order('created_at ASC')
  # before_save :add_default_value
  
  validates_presence_of :title, :content
  validates_inclusion_of :timer, in: 1..10
  
   # self.primary_key = 'id'
  
  def add_default_value
    self.viewed = false if self.viewed.nil?
  end
end
