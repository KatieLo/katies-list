# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151114205919) do

  create_table "day_cares", force: :cascade do |t|
    t.string   "name"
    t.string   "street"
    t.string   "postcode"
    t.string   "city"
    t.string   "state"
    t.string   "description"
    t.decimal  "latitude"
    t.decimal  "longitude"
    t.integer  "min_age"
    t.integer  "max_age"
    t.boolean  "has_waitlist"
    t.integer  "average_waitlist_time"
    t.integer  "group_size"
    t.decimal  "price_per_week"
    t.decimal  "price_per_month"
    t.boolean  "birth_certificate_required"
    t.integer  "open_time"
    t.integer  "close_time"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "website"
    t.string   "cover_file_name"
    t.string   "cover_content_type"
    t.integer  "cover_file_size"
    t.datetime "cover_updated_at"
  end

end
