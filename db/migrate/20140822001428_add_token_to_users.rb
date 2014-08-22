class AddTokenToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :token, unique: :true
    end
    add_index :users, :username, unique: :true
    add_index :users, :email, unique: :true
  end
end
