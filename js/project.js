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


// End of project.js
});