class CreateTeachers < ActiveRecord::Migration[6.0]
  def change
    create_table :teachers do |t|
      t.string :name
      # t.image :image
      t.string :profession
      t.integer :age
      t.string :number
      t.string :email
      

      t.string :password_digest

      t.timestamps
    end
  end
end
