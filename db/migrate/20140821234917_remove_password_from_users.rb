class RemovePasswordFromUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
    t.remove :password
    t.string :password_hash
    t.string :password_salt
    end
  end
end
