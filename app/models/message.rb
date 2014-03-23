class Message < ActiveRecord::Base
  belongs_to :user
  after_initialize :add_default_value
  
  validates_presence_of :title, :content, :viewed
  
  def add_default_value
    self.viewed = false if self.viewed.nil?
  end
end
