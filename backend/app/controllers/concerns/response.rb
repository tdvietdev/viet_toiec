module Response
  def json_response(object, status = :ok)
    render json: object, status: status
  end

  def json_response_with_serializer(object, serializer, status = :ok, **options)
    render json: object, serializer: serializer, status: status, options: options
  end

  def internal_server_error_response(object)
    json_response(object, :internal_server)
  end

  def bad_request_response(object)
    json_response(object, :bad_request)
  end

  def not_found_response(object)
    json_response(object, :not_found)
  end

  def unprocessable_entity_response(object)
    json_response(object, :unprocessable_entity)
  end

  def unauthorized_response(object)
    json_response(object, :unauthorized)
  end

  def forbidden_response(object)
    json_response(object, :forbidden)
  end
end
