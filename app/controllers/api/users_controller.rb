class Api::UsersController < ApplicationController
  respond_to :json

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      respond_with @user
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
