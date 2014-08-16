class ChangeColumnNameInImages < ActiveRecord::Migration
  def change
    change_table :images do |t|
      t.rename :name, :album
    end
  end
end
