class AddImageToCharacters < ActiveRecord::Migration[5.1]
  def change
    add_reference :characters, :image, foreign_key: true
  end
end
