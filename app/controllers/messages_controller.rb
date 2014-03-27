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
    
    # respond_with(@message)
    redirect_to user_messages_url
    # render "show"
  end
  
  def update
    @message = Message.find(params[:id])
    if @messages.update_attributes(params[:message])
      respond_with(@message)
    else
      respond_with(@message.errors, status: :unprocessable_entity)
    end
  end
  
  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    
    respond_with(nil)
  end
  
  def show
    @message = Message.find(params[:id])
    
    respond_with(@message)
  end
  
  def message_params
    params.require(:message).permit(:title, :content, :viewed, :user_id)
  end
end
