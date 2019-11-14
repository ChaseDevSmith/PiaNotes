class CreatePractices < ActiveRecord::Migration[6.0]
  def change
    create_table :practices do |t|
      t.datetime :time
      t.text :description
      t.integer :student_id
      t.timestamps
      
    end
  end
end
