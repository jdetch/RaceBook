class ChangeColumnNameInRaces < ActiveRecord::Migration
  def change
    change_table :races do |t|
      t.rename :type, :race_type
    end
  end
end
