class MainController < ApplicationController
  def index
    @emailer = Emailer.new
    
    render :index
  end
  
  def main_page
    
  end
end
