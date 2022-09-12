class GreetingsController < ApplicationController
  def index
    render json: Message.random
  end
end
