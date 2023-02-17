class CreateEquipmentReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :equipment_reviews do |t|
      t.belongs_to :equipment 
      t.string :description

      t.timestamps
    end
  end
end
