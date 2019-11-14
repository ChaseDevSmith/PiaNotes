class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :name
      # t.image :image
      
      t.integer :age
      t.string :number
      t.string :email
      t.integer :parent_id

      t.string :password_digest

      t.timestamps
    end
  end
end
