$(function() {
	var baseTitle = window.document.title;
	var images = {
		quickSearch: ["http://res.cloudinary.com/pra1se/image/upload/v1523584090/Old_Design_aqlwgt.jpg",
					  "http://res.cloudinary.com/pra1se/image/upload/v1523988498/ITERATION_1_pfd16q.jpg",	
					  "http://res.cloudinary.com/pra1se/image/upload/v1523980697/ITERATION_2_m2ocbc.jpg"],
		profile: ["http://res.cloudinary.com/pra1se/image/upload/v1525691752/PREVIOUS_LAYOUT_gfu45h.jpg"]
		};
	var labels = {
		quickSearch: ["OLD SEARCH", "ITERATION #1", "ITERATION #2"],
		profile: ["PREVIOUS PROFILE UI"]
	}



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

	$("#abrProject").click(function(){
		window.open('ABR.html', '_blank');
	});	

	$("#abrProjectTitle").click(function(){
		window.open('ABR.html', '_blank');
	});


	// Preqin Pro Click Events
	// Open Modal
	function openModal(param1, param2){
		$("#select-img").attr("src", param1);
		$("#modal-header").html(param2);
		$(".modal-bg").css("display", "block");
		$("body").addClass("modal-open");
		$("#modal-bg").scrollTop(0);
	};
	// Quick Search Pics
	$("#qs-img-1").click(function(){
		openModal(images.quickSearch[0], labels.quickSearch[0]);
	});

	$("#qs-img-2").click(function(){
		openModal(images.quickSearch[1], labels.quickSearch[1]);
	});

	$("#qs-img-3").click(function(){
		openModal(images.quickSearch[2], labels.quickSearch[2]);
	});

	// Profile Pice
	$("#pro-img-1").click(function(){
		openModal(images.profile[0], labels.profile[0]);
	});


	// Close Modal
	$("#modal").on('click', function(event) {
		event.stopPropagation();
	});

	$(".modal-bg").click(function(){
		$(".modal-bg").css("display", "none");
		$("body").removeClass("modal-open");
	});
		



	// End of index.js
});