class RemoveAlbumFromImages < ActiveRecord::Migration
  def change
    change_table :images do |t|
      t.remove :album
    end
  end
end
