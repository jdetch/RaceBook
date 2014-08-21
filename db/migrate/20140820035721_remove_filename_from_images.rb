class RemoveFilenameFromImages < ActiveRecord::Migration
  def change
    change_table :images do |t|
      t.remove :filename
    end
  end
end
