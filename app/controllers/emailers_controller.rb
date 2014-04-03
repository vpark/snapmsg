class EmailersController < ApplicationController
  def new
    @emailer = Emailer.new
  end

  def create
    @emailer = Emailer.new(params[:emailer])
    if @emailer.valid?
      send_simple_message(@emailer)
      redirect_to root_url, notice: "Message sent! Thank you for contacting us."
    else
      flash[:error] = "All fields are required."
      redirect_to root_url
    end
  end
  
  def send_simple_message(emailer)
    RestClient.post "https://api:key-1j4vw9d3af5puxxgp9hc4mxku-cr8pa5"\
    "@api.mailgun.net/v2/sandbox1b30e570ddcd4d6bb8477edf3d29d8b4.mailgun.org/messages",
    :from => emailer.name + " <" + emailer.email + ">",
    :to => "Vincent <vincentpark@gmail.com>",
    :subject => emailer.subject,
    :text => emailer.content
  end
end
