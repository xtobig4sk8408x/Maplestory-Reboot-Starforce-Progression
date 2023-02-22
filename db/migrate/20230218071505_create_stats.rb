class CreateStats < ActiveRecord::Migration[6.1]
  def change
    create_table :stats do |t|
      t.belongs_to :equipment, null: false, foreign_key: true
      t.integer :str
      t.integer :dex
      t.integer :int
      t.integer :luk
      t.integer :hp
      t.integer :mp
      t.float :def
      t.integer :spd
      t.integer :jump
      t.integer :atk
      t.integer :matk

      t.timestamps
    end
  end
end
