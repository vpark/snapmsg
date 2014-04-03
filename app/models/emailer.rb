class Emailer
  include ActiveAttr::Model
  
  attribute :name
  attribute :email
  attribute :subject
  attribute :content
  
  validates_presence_of :name
  validates_format_of :email, :with => /\A[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}\z/i
  validates_length_of :subject, :maximum => 80
  validates_length_of :content, :maximum => 500
end
