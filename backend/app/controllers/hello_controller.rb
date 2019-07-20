class HelloController < ApplicationController
  def index
    render 'index', formats: :json, builder: :builder
  end
end
