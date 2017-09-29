class HighscoresController < ApplicationController
	def create
		#respond_to do |format|
			#format.js
      #format.json { render json: {name: params[:name], time: params[:time], image_id: params[:image_id]}}
    #end
		@highscore = Highscore.new(name:params[:name], time: params[:time], image_id: params[:image_id])
		@highscore.save
		highscores = Highscore.where(image_id: @highscore.image_id).order(:time)
		if highscores.length > 5
			highscores.last.delete
		end
		redirect_to(root_path)
	end
end
