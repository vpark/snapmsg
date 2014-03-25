class Message < ActiveRecord::Base
  belongs_to :user
  # before_save :add_default_value
  
  validates_presence_of :title, :content
  
  def add_default_value
    self.viewed = false if self.viewed.nil?
  end
end
