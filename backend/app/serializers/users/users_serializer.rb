class UsersSerializer < ActiveModel::Serializer
  attribute :users

  def users
    CollectionSerializer.new(
        object,
        serializer: UserSerializer
    )
  end
end
