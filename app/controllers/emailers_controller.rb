class EmailersController < ApplicationController
  def new
    @emailer = Emailer.new
  end

  def create
    @emailer = Emailer.new(params[:emailer])
    if @emailer.valid?
      send_email(@emailer)
      redirect_to root_url, notice: "Message sent! Thank you for contacting us."
    else
      flash[:error] = "All fields are required."
      redirect_to root_url
    end
  end
  
  def send_email(emailer)
    RestClient.post ENV["MAILGUN_API_KEY_AND_SUBDOMAIN"],
    :from => emailer.name + " <" + emailer.email + ">",
    :to => "Vincent <vincentpark@gmail.com>",
    :subject => emailer.subject,
    :text => emailer.content
  end
end
