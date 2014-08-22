class UserSerializer < ActiveModel::Serializer
  attributes :username, :email, :token
end
