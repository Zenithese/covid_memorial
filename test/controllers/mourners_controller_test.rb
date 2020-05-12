require 'test_helper'

class MournersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mourner = mourners(:one)
  end

  test "should get index" do
    get mourners_url
    assert_response :success
  end

  test "should get new" do
    get new_mourner_url
    assert_response :success
  end

  test "should create mourner" do
    assert_difference('Mourner.count') do
      post mourners_url, params: { mourner: { employer: @mourner.employer, first_name: @mourner.first_name, job_title: @mourner.job_title, last_name: @mourner.last_name, union: @mourner.union } }
    end

    assert_redirected_to mourner_url(Mourner.last)
  end

  test "should show mourner" do
    get mourner_url(@mourner)
    assert_response :success
  end

  test "should get edit" do
    get edit_mourner_url(@mourner)
    assert_response :success
  end

  test "should update mourner" do
    patch mourner_url(@mourner), params: { mourner: { employer: @mourner.employer, first_name: @mourner.first_name, job_title: @mourner.job_title, last_name: @mourner.last_name, union: @mourner.union } }
    assert_redirected_to mourner_url(@mourner)
  end

  test "should destroy mourner" do
    assert_difference('Mourner.count', -1) do
      delete mourner_url(@mourner)
    end

    assert_redirected_to mourners_url
  end
end
