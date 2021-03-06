class MessagesController < ApplicationController
  respond_to :json
  
  def index
    @user_messages = current_user.messages
    
    respond_with(@user_messages)
  end
  
  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    if @message.save!
      flash[:notice] = "Message saved!"
    # else
    #   flash[:error] = "Please fill out missing fields!"
    end
    redirect_to user_messages_url
    # render "show"
  end
  
  def update
    @message = Message.find(params[:id])
    if @message.update_attributes(message_params)
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
    
    if @message.opened == false
      # uncomment to allow view only once
      @message.update_attributes(opened: true)
      respond_with(@message)
    else
      respond_with(nil)
    end
  end
  
  def message_params
    params.require(:message).permit(:title, :content, :viewed, :timer, :user_id)
  end
end
