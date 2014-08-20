class AddRaceImageToImages < ActiveRecord::Migration
  def self.up
    add_attachment :images, :race_image
  end

  def self.down
    remove_attachment :images, :race_image
  end
end
