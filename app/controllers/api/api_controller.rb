class Api::ApiController < ApplicationController
  respond_to :json

  protected

  # If the block passed to authenticate_or_request_with_http_token returns true, the authentication passes
  # So, in here we check that an ApiKey exists with the token that is passed in
  def restrict_access
    authenticate_or_request_with_http_token do |token, options|
      if User.exists?(token: token)
        @currentUser = User.find_by_token(token)
      end
    end
  end
end
