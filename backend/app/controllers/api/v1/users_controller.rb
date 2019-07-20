class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    json_response_with_serializer @users, UsersSerializer
  end
end
