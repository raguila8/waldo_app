# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'fastimage'

CHARACTERS = ["waldo", "wenda", "odlaw", "wizard"]
POSITIONS = {"waldo1": [880, 959], "wenda1": [891, 759], 
						 "odlaw1": [1206, 1206], "wizard1": [1339, 984],
						 "waldo2": [1181, 325], "wenda2": [840, 1295], 
						 "odlaw2": [555, 1278], "wizard2": [1927, 90], 
					   "waldo3": [476, 1550], "wenda3": [2141, 1394], 
						 "odlaw3": [2447, 1503], "wizard3": [816, 242], 
						 "waldo4": [1599, 624], "wenda4": [1092, 579],
						 "odlaw4": [1128, 1059], "wizard4": [2378, 1502]}

4.times do |n|
	image = Image.new
	image.name = "image#{n + 1}.jpg"
	image.width, image.height = FastImage.size("app/assets/images/image#{n + 1}.jpg")
	image.save
end

4.times do |n|
	4.times do |i|
		character = Character.new
		character.name = CHARACTERS[i]
		character.image_id = n + 1
		character.x = POSITIONS[:"#{character.name}#{character.image_id}"][0]
		character.y = POSITIONS[:"#{character.name}#{character.image_id}"][1]
		character.save
	end
end


