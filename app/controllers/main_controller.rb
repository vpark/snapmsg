class MainController < ApplicationController
  def index
    @emailer = Emailer.new
  end
end
