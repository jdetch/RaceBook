class Api::UsersController < ApplicationController
  before_filter :restrict_access
  respond_to :json

  private

  # If the block passed to authenticate_or_request_with_http_token returns true, the authentication passes
  # So, in here we check that an ApiKey exists with the token that is passed in
  def restrict_acess
    authenticate_or_request_with_http_token do |token, options|
      ApiKey.exists?(access_token: token)
    end
  end

end
