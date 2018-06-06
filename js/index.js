$(function() {
	var baseTitle = window.document.title;

	// Browser Tab Functionality
	$(window).focus(function() {
		if (location.href === 'file:///Users/patrickmaulion/Documents/GitHub/pmaulion704.github.io/index.html') {
			window.document.title = "Patrick Maulion";
		} else if (location.href === 'www.patrickmaulion.com/Preqin-Pro.html') {
			window.document.title = "Patrick Maulion - Preqin Pro";
		} else if (location.href === 'www.patrickmaulion.com/Boost-My-School.html') {
			window.document.title = "Patrick Maulion - BoostMySchool";
		} else if (location.href === 'www.patrickmaulion.com/Always-Be-Running') {
			window.document.title = "Patrick Maulion - Always. Be. Running.";
		}
	});

	$(window).focusout(function() {
		window.document.title = "Hey, I'm over here!"
	}); 


	// Project Navigation
	$("#neoProject").click(function(){
		window.location.href = "Preqin-Pro.html";
	});	

	$("#neoProjectTitle").click(function(){
		window.location.href = "Preqin-Pro.html";
	});

	$("#abrProject").click(function(){
		window.location.href = "Always-Be-Running.html";
	});	

	$("#abrProjectTitle").click(function(){
		window.location.href = "Always-Be-Running.html";
	});

	$("#boostMySchoolProject").click(function(){
		window.location.href = "Boost-My-School.html";
	});	

	$("#boostMySchoolProjectTitle").click(function(){
		window.location.href = "Boost-MySchool.html";
	});

	// End of index.js
});