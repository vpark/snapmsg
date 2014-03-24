class UsersController < ApplicationController
  respond_to :json
  
  def index
    respond_with(@user = current_user)
  end
  
  def show
    respond_with(User.find(params[:id]))
  end
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :remember_me)
  end
end
