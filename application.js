$(document).ready(function()
    {
        // Scroll the whole document
        $('ul').localScroll({
           target:'body',
           offset: -55
        });

        $('.left-tilt img').on('mouseover', function(){ 
        	 $(this).rotate({
		            angle: 0,
		            duration:50,
		            animateTo:-7
	          });
		});

		$('.left-tilt img').on('mouseout', function() {
		    $(this).rotate({
		            angle: -7,
		            duration:50,
		         	animateTo:0
			});
		});

		$('.right-tilt img').on('mouseover', function(){ 
        	 $(this).rotate({
		            angle: 0, 
		            duration:50,
		            animateTo:7
	          });
		});

		$('.right-tilt img').on('mouseout', function() {
		    $(this).rotate({
		            angle: 7,
		            duration:50,
		         	animateTo:0
			});
		}); 
    });