class CreatePractices < ActiveRecord::Migration[6.0]
  def change
    create_table :practices do |t|
      t.datetime :time
      t.integer :description
      t.timestamps
      
    end
  end
end
