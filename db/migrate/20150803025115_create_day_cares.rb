class CreateDayCares < ActiveRecord::Migration
  def change
    create_table :day_cares do |t|
      t.string :name
      t.string :street
      t.string :postcode
      t.string :city
      t.string :state
      t.string :description
      t.decimal :latitude
      t.decimal :longitude
      t.integer :min_age
      t.integer :max_age
      t.boolean :has_waitlist
      t.integer :average_waitlist_time
      t.integer :group_size
      t.decimal :price_per_week
      t.decimal :price_per_month
      t.boolean :birth_certificate_required
      t.integer :open_time
      t.integer :close_time

      t.timestamps null: false
    end
  end
end
