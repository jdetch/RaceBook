class AddLatitudeAndLongitudeToRaces < ActiveRecord::Migration
    def change
      change_table :races do |t|
      add_column :races, :latitude, :float
      add_column :races, :longitude, :float
    end
  end
end
