$(function() {
	var baseTitle = window.document.title
	

	// Browser Tab Functionality
	$(window).focus(function() {
		if (location.href === 'file:///Users/patrickmaulion/Portfolio/index.html') {
			window.document.title = "Patrick Maulion"
		} else if (location.href === 'file:///Users/patrickmaulion/Portfolio/PreqinPro.html') {
			window.document.title = "Patrick Maulion - Preqin Pro"
		}
	});

	$(window).focusout(function() {
		window.document.title = "Hey, I'm over here!"
	}); 


	// Project Navigation
	$("#neoProject").click(function(){
		window.location.href = "PreqinPro.html";
	});	

	$("#neoProjectTitle").click(function(){
		window.location.href = "PreqinPro.html";
	});	
});