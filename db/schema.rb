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

ActiveRecord::Schema.define(version: 20140822001428) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "api_keys", force: true do |t|
    t.string   "access_token"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "images", force: true do |t|
    t.integer  "race_id"
    t.string   "race_image_file_name"
    t.string   "race_image_content_type"
    t.integer  "race_image_file_size"
    t.datetime "race_image_updated_at"
  end

  add_index "images", ["race_id"], name: "index_images_on_race_id", using: :btree

  create_table "races", force: true do |t|
    t.string  "name",           null: false
    t.string  "city",           null: false
    t.string  "state",          null: false
    t.date    "date"
    t.string  "race_type"
    t.integer "time"
    t.integer "place_agegroup"
    t.integer "place_gender"
    t.integer "place_overall"
    t.text    "note"
    t.integer "user_id"
  end

  add_index "races", ["user_id"], name: "index_races_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string "username"
    t.string "email"
    t.string "password_hash"
    t.string "password_salt"
    t.string "token"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
