$(function() {
	var baseTitle = window.document.title;

	// Browser Tab Functionality
	$(window).focus(function() {
		if (location.href === "http://www.patrickmaulion.com/index.html" || location.href === "www.patrickmaulion.com" || location.href ==="http://www.patrickmaulion.com") {
			window.document.title = "Patrick Maulion";
		} else if (location.href === "http://www.patrickmaulion.com/Preqin-Pro.html") {
			window.document.title = "Patrick Maulion - Preqin Pro";
		} else if (location.href === "http://www.patrickmaulion.com/Daily-UI-100.html") {
			window.document.title = "Patrick Maulion - Daily UI 100 Challenge";
		} else if (location.href === "http://www.patrickmaulion.com/Boost-My-School.html") {
			window.document.title = "Patrick Maulion - BoostMySchool";
		} else if (location.href === "http://www.patrickmaulion.com/Always-Be-Running.html") {
			window.document.title = "Patrick Maulion - Always. Be. Running.";
		}
	});

	$(window).focusout(function() {
		window.document.title = "Hey, I'm over here!"
	}); 

	 
	// Hamburger Menu Navigation 
	var menu = true;

	function open_hamburger() {
		$("#menu-button").attr("src", "../pmaulion704.github.io/images/icons/icons8-close-32.png");
			$("#hamburger-content").removeClass("dn");
			$("#hamburger-content").addClass("fadeInDown fast");
			menu = false;
	};

	function close_hamburger() {
		$("#menu-button").attr("src", "../pmaulion704.github.io/images/icons/icons8-menu-32.png");
			$("#hamburger-content").addClass("dn");
			menu = true;
	};
	
	// Toggling hamburger menu button
	$("#hamburger-menu-button").click(function(){
		if (menu === true) {
			open_hamburger();		
		} else if (menu === false) {
			close_hamburger();
		}
	});

	// Action after users select a menu-item in expanded hamburger mode
	$(".cancel_hamburger").click(function(){
		close_hamburger();
	});



	// Project Navigation
	$("#neoProject").click(function(){
		window.location.href = "Preqin-Pro.html";
	});	

	$("#neoProjectTitle").click(function(){
		window.location.href = "Preqin-Pro.html";
	});

	// ABR Project
	$("#abrProject").click(function(){
		window.location.href = "Always-Be-Running.html";
	});	

	$("#abrProjectTitle").click(function(){
		window.location.href = "Always-Be-Running.html";
	});


	// Boost My School
	$("#boostMySchoolProject").click(function(){
		window.location.href = "Boost-My-School.html";
	});	

	$("#boostMySchoolProjectTitle").click(function(){
		window.location.href = "Boost-MySchool.html";
	});
	
	// 100 Day Challenge
	$("#hundredDailyChallengeProject").click(function(){
		window.location.href = "Daily-UI-100.html";
	});	

	$("#hundredDailyChallengeProjectTitle").click(function(){
		window.location.href = "Daily-UI-100.html";
	});

	
	// Scroll to Project List
    $("#projectScroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#workID").offset().top -32 }, 1250);
    });
        

	// End of index.js
});