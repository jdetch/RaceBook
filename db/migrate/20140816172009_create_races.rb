class CreateRaces < ActiveRecord::Migration
  def change
    create_table :races do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.date :date
      t.string :type
      t.integer :time
      t.integer :place_agegroup
      t.integer :place_gender
      t.integer :place_overall
      t.text :note
      t.references :user, index: true
    end
  end
end
