$(function() {

	// Show Back to Top Bottom once user scrolls past 800px
	$(document).scroll(function() {
  	var y = $(this).scrollTop();
  	if (y > 800) {
    	$('#scrollTop').removeClass('invisible').addClass('visible');
  	} else {
    	$('#scrollTop').removeClass('visible').addClass('invisible');
  	}
	});

	// Scroll to Top Action
	$(".scrollTop").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
	});

	// Toggle Menu Button
	// Define the two image URLs
	var image1 = "images/menu.svg";
	var image2 = "images/close.svg";


	// Set the initial state to "false"
	var state = false;

	// Select the button element with class "hamburgerMenu"
	var $button = $(".hamburgerMenu");
	var $overlay = $("#overlayContainer");

	// Add a click event listener to the button
	$button.click(function() {
		// Select the img element inside the button
		var $img = $(this).find("img");

		// Toggle the state variable
		state = !state;

		// Toggle the "show" class on the overlay container based on the state variable
		$overlay.toggleClass("show", state);
		$('body').toggleClass("lock", state);

		// Change the src attribute of the img element based on the state variable
		if (state) {
			$img.attr("src", image2);
		} else {
			$img.attr("src", image1);
		}
	});

	$(window).on('resize', function() {
	if ($(window).width() >= 768) {
		$('#overlayContainer').removeClass('show');
		}
	});

// End of project.js
});
