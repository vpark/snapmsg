class MesssagesController < ApplicationController
  def index
    @user_messages = current_user.messages
    render :json => @user_messages.to_json
  end
  
  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    
    @message.save!
    
    render :json => @message
  end
  
  def message_params
    params.require(:message).permit(:title, :content, :viewed, :user_id)
  end
end
