class Stats < ActiveRecord::Migration[6.1]
  def change 
    create_table :stats do |t|
      t.integer :int
      t.integer :luk
      t.integer :hp 
      t.integer :mp 
      t.integer :def
      t.belongs_to :equipment

      t.timestamps
    end
  end
end
