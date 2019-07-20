require 'test_helper'

class HelloControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hello_index_url
    assert_response :success
  end

  test "should get show" do
    get hello_show_url
    assert_response :success
  end

end
