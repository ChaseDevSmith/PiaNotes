class CreateParents < ActiveRecord::Migration[6.0]
  def change
    create_table :parents do |t|
      t.string :name
      # t.image :image
      
      t.string :password_digest

      t.string :number
      t.string :email
      t.timestamps
    end
  end
end
