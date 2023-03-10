# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_02_24_062243) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "equipment_reviews", force: :cascade do |t|
    t.bigint "equipment_id"
    t.bigint "user_id"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["equipment_id"], name: "index_equipment_reviews_on_equipment_id"
    t.index ["user_id"], name: "index_equipment_reviews_on_user_id"
  end

  create_table "equips", force: :cascade do |t|
    t.string "name"
    t.string "job"
    t.integer "str"
    t.integer "dex"
    t.integer "int"
    t.integer "luk"
    t.integer "hp"
    t.integer "mp"
    t.float "def"
    t.integer "spd"
    t.integer "jump"
    t.integer "atk"
    t.integer "matk"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
