class CreateWorkers < ActiveRecord::Migration[6.0]
  def change
    create_table :workers do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :employer, null: false
      t.string :job_title, null: false
      t.string :union, null: false
      t.text :message

      t.timestamps
    end
  end
end
