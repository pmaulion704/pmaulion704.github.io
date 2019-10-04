$(function() {

	$(".scrollTop").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
	});

	$(".viewHover").mouseenter(function(){
		$(this).find('.arrow').css('transform', 'translateX(10px)')
		$(this).find('.arrow').css('transition', '0.25s ease-out')
	});

	$(".viewHover").mouseleave(function(){
		$(this).find('.arrow').css('transform', 'translateX(0px)')
		$(this).find('.arrow').css('transition', '0.25s ease-out')
	});

	// Add Scroll Functionality
// End of indjex.js
});
