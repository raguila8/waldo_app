class HighscoresController < ApplicationController
  def create
		respond_to do |format|
      format.json { render json: {name: params[:name], time: params[:time], image_id: params[:image_id]}}
    end

		@highscore = Highscore.new(name:params[:name], time: params[:time], image_id: params[:image_id])
		@highscore.save
		highscores = Highscore.order(:time)
		if highscores.length > 5
			highscores.last.delete
    end
  end
end
