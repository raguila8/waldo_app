class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.string :name
      t.decimal :width
      t.decimal :height

      t.timestamps
    end
  end
end
