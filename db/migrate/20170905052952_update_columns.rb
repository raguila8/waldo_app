class UpdateColumns < ActiveRecord::Migration[5.1]
  def change
		change_table :highscores do |t|
			#t.change :time, :float
			#t.change :time, 'float USING CAST(time AS float)'
		end
		change_column :highscores, :time, 'float USING CAST(time AS float)'
  end
end
