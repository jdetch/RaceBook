class Api::SessionsController < ApplicationController
  respond_to :json

  def create
    user = User.authenticate(params[:email], params[:password])
    if user
      render json: user
    else
      render json: @user, :status => 404
    end
  end
end
