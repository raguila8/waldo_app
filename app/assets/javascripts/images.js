$(document).on('turbolinks:load', function() {

  // Will only evalute if '.image-container' class exists in current page
  if ($(".image-container").length) {
    $('.image-container').css("margin-top", $('nav').height());

		$('#dialog1').dialog({
			draggable: false,
			resizable: false,
			closeOnEscape: false,
			modal: true,
			autoOpen: false
    });

		$('#dialog2').dialog({
			draggable: false,
			resizable: false,
			closeOnEscape: false,
			modal: true,
			autoOpen: false
    });

    var AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');
    //console.log(AUTH_TOKEN);
    var characterFound = {"waldo":false, "wenda": false, "wizard":false, 
													"odlaw": false};
    var characterPositions = {};
    var CHARACTERS = ["waldo", "wenda", "wizard", "odlaw"];
		var foundCount = 0;
		var start = new Date();
    var highscores = [];
    //console.log(highscores.size);
    var imageId;
    // This returns the x and y coordinates relative to the image.
		function getPos(x, y) {
      var pos = {
        x: x,
        y: y - parseInt($('.image-container').css('margin-top'))
      };
      return pos;
    }

    function checkSelection(pos, circle) {
      // tells us whether any new character was found.
      var found = false;
      for (var i = 0; i < CHARACTERS.length; i++) {
        // if selection is within the circle's area and character hasn't been
				// found, mark character as found.
        if ((Math.abs(pos.x - characterPositions[CHARACTERS[i]].x)) < 50 &&	
						(Math.abs(pos.y - characterPositions[CHARACTERS[i]].y)) < 50 &&
																								!characterFound[i]) {
        	var found = $("<div class='found' style='left:50%; top:50%'>X</div>");
					$("#" + CHARACTERS[i]).append(found);
					found.addClass('scale');
					characterFound[i] = true;
          found = true;
					foundCount += 1;
					break;
        }
      }
			if (!found) {
				circle.fadeOut(1000);
				setTimeout(function() {
					circle.remove();
				}, 1000);
      } else {
				if (foundCount === CHARACTERS.length) {
					endGame();
				}
      }
    }

		function loadForm(elapsed) {
			$('#name_button').one('click', function(e) {
				e.preventDefault();
				console.log("here");
				//$('#new_highscore #sub').prop( "disabled", false );
				var name = $('#name').val();
        if (name.trim() === "" || name === null) {
					//e.preventDefault();
					alert("Name cannot be empty");
					//$('#new_highscore #sub').prop( "disabled", false );
					//$('#new_highscore .btn-primary').prop( "disabled", false );
					loadForm(elapsed);
          return;
			  }
        //console.log(window._token);
				$.ajax({
					type: "POST",
					url: "/highscores",
					data: {
						authenticity_token: AUTH_TOKEN,
						name: name, 
						time: elapsed, 
						image_id: imageId
					}
				});
				//$(this).trigger('click');
				$('#dialog1').dialog("close");
			});
    }

		function congradulate(elapsed) {
			var msg = $("<p>You found Waldo and his friends in " + elapsed + " seconds!</p>");
			$('#dialog2').prepend(msg);
			$('#dialog2').dialog("open");
			$('#congrats_button').one('click', function(e) {
				$('#dialog2').dialog("close");
			});
		}

    function endGame() {
      var elapsed = (new Date() - start) / 1000;
			//var times = [];
      //console.log(highscores.size);
			if (highscores.length < 5) {
			  // open dialog and send new highscore to server
				$('#dialog1').dialog("open");
				loadForm(elapsed);
				return;
			} else {
				for (var i = 0; i < highscores.length; i++) {
					console.log(highscores[i]);
					if (elapsed < highscores[i]) {
						// open dialog and sen new highscore to server
						$('#dialog1').dialog("open");
						loadForm(elapsed);
						return;
					}
				}
      }
			congradulate(elapsed);	
			//console.log("time: " + elapsed + " s");
		}

		// Loading JSON data from Character model
    $.getJSON(window.location.href + ".json").done(function(data) {
      imageId = data.characters[0].image_id
      for (var i = 0; i < data.characters.length; i++) {
        var pos = {
          x: parseInt(data.characters[i].x),
          y: parseInt(data.characters[i].y)
        };
        characterPositions[data.characters[i].name] = pos;
      }
      for (var i = 0; i < data.highscores.length; i++) {
				highscores.push(data.highscores[i].time);
			}
      //console.log("x: " + characterPositions["waldo"].x);
      //console.log("y: " + characterPositions["waldo"].y);
    });

    $(".image-container").on('click', function(event) {
      x = event.pageX;
      y = event.pageY;
      pos = getPos(x, y);
      //console.log(pos.y);
      //console.log(characterPositions["waldo"].y);

			// circles area clicked on
      var circle = $("<div class='circle' style='left:" + x + "px; top:" + y + "px'></div>");
		  $('.image-container').append(circle);
      setTimeout(function() {
        circle.addClass('scale');
      }, 50);
      checkSelection(pos, circle);
    });

  }
});
