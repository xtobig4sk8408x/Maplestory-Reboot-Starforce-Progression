class CreateJobReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :job_reviews do |t|
      t.string :description 
      t.belongs_to :job

      t.timestamps
    end
  end
end
