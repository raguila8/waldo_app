class ImagesController < ApplicationController
  def index
    @images = Image.all
		@highscores = Highscore.all
  end

  def show
		@highscore = Highscore.new
    id = params[:image]
    @image = Image.find(id)
    @characters = Character.where(image_id: id)
	  @highscores = Highscore.where(image_id: id)
    respond_to do |format|
      format.html
      format.json {render json: {characters: @characters, highscores: @highscores}}
    end
  end
end
