class MessagesController < ApplicationController
  respond_to :json
  
  def index
    @user_messages = current_user.messages
    
    respond_with(@user_messages)
  end
  
  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    @message.save!
    
    respond_with(@message)
  end
  
  def show
    @message = Message.find(params[:id])
    
    respond_with(@message)
  end
  
  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    
    respond_with(nil)
  end
  
  def message_params
    params.require(:message).permit(:title, :content, :viewed, :user_id)
  end
end
