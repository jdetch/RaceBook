class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :token
end
