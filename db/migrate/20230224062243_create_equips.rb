class CreateEquips < ActiveRecord::Migration[6.1]
  def change
    create_table :equips do |t|
      t.string :name
      t.string :job
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
      t.string :image

      t.timestamps
    end
  end
end
