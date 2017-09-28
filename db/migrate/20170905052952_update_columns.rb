class UpdateColumns < ActiveRecord::Migration[5.1]
  def change
		change_table :highscores do |t|
			t.change :time, :float
		end
  end
end
