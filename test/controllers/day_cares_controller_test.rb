require 'test_helper'

class DayCaresControllerTest < ActionController::TestCase
  setup do
    @day_care = day_cares(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:day_cares)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create day_care" do
    assert_difference('DayCare.count') do
      post :create, day_care: { average_waitlist_time: @day_care.average_waitlist_time, birth_certificate_required: @day_care.birth_certificate_required, city: @day_care.city, close_time: @day_care.close_time, description: @day_care.description, group_size: @day_care.group_size, has_waitlist: @day_care.has_waitlist, latitude: @day_care.latitude, longitude: @day_care.longitude, max_age: @day_care.max_age, min_age: @day_care.min_age, name: @day_care.name, open_time: @day_care.open_time, postcode: @day_care.postcode, price_per_month: @day_care.price_per_month, price_per_week: @day_care.price_per_week, state: @day_care.state, street: @day_care.street }
    end

    assert_redirected_to day_care_path(assigns(:day_care))
  end

  test "should show day_care" do
    get :show, id: @day_care
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @day_care
    assert_response :success
  end

  test "should update day_care" do
    patch :update, id: @day_care, day_care: { average_waitlist_time: @day_care.average_waitlist_time, birth_certificate_required: @day_care.birth_certificate_required, city: @day_care.city, close_time: @day_care.close_time, description: @day_care.description, group_size: @day_care.group_size, has_waitlist: @day_care.has_waitlist, latitude: @day_care.latitude, longitude: @day_care.longitude, max_age: @day_care.max_age, min_age: @day_care.min_age, name: @day_care.name, open_time: @day_care.open_time, postcode: @day_care.postcode, price_per_month: @day_care.price_per_month, price_per_week: @day_care.price_per_week, state: @day_care.state, street: @day_care.street }
    assert_redirected_to day_care_path(assigns(:day_care))
  end

  test "should destroy day_care" do
    assert_difference('DayCare.count', -1) do
      delete :destroy, id: @day_care
    end

    assert_redirected_to day_cares_path
  end
end
