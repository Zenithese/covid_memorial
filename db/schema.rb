# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_11_231050) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "mourners", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "employer", null: false
    t.string "job_title", null: false
    t.string "union", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "workers", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "employer", null: false
    t.string "job_title", null: false
    t.string "union", null: false
    t.text "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end