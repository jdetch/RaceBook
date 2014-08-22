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

  # If the block passed to authenticate_or_request_with_http_token returns true, the authentication passes
  # So, in here we check that an ApiKey exists with the token that is passed in
  def restrict_access
    authenticate_or_request_with_http_token do |token, options|
      ApiKey.exists?(access_token: token)
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
