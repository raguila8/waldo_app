require 'test_helper'

class HighscoresControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get highscores_create_url
    assert_response :success
  end

end
