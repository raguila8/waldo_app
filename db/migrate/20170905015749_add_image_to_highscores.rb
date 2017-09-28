class AddImageToHighscores < ActiveRecord::Migration[5.1]
  def change
    add_reference :highscores, :image, foreign_key: true
  end
end
