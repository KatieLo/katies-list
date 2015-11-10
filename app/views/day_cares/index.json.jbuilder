json.array!(@day_cares) do |day_care|
  json.extract! day_care, :id, :name, :street, :postcode, :city, :state, :description, :latitude, :longitude, :min_age, :max_age, :has_waitlist, :average_waitlist_time, :group_size, :price_per_week, :price_per_month, :birth_certificate_required, :open_time, :close_time, :website
  json.url day_care_url(day_care, format: :json)
end
