$(function() {
	
	// DATA
	var images = {
		quickSearch: ["http://res.cloudinary.com/pra1se/image/upload/v1523584090/Old_Design_aqlwgt.jpg",
					  "http://res.cloudinary.com/pra1se/image/upload/v1523988498/ITERATION_1_pfd16q.jpg",	
					  "http://res.cloudinary.com/pra1se/image/upload/v1523980697/ITERATION_2_m2ocbc.jpg"],
		profile: ["http://res.cloudinary.com/pra1se/image/upload/v1525691752/PREVIOUS_LAYOUT_gfu45h.jpg",
				  "http://res.cloudinary.com/pra1se/image/upload/v1526383018/Add_to_Watchlist_ealt2g.jpg",
				  "http://res.cloudinary.com/pra1se/image/upload/v1526383018/Create_Watchlist_zjgmgg.jpg",
				  "http://res.cloudinary.com/pra1se/image/upload/v1526383018/Create_Error_guhmla.jpg"],
		profileCarousel: ["http://res.cloudinary.com/pra1se/image/upload/v1526699314/carousel-1_omcdjt.jpg", 
						  "http://res.cloudinary.com/pra1se/image/upload/v1526699314/carousel-2_c0ty2d.jpg",
						  "http://res.cloudinary.com/pra1se/image/upload/v1526699315/carousel-3_m1amds.jpg",
						  "http://res.cloudinary.com/pra1se/image/upload/v1526699314/carousel-4_jacuzn.jpg",
						  "http://res.cloudinary.com/pra1se/image/upload/v1526699314/carousel-5_bcica5.jpg",
						  "http://res.cloudinary.com/pra1se/image/upload/v1526699314/carousel-6_fht6fn.jpg",
						  "http://res.cloudinary.com/pra1se/image/upload/v1526699314/carousel-7_cz6c0x.jpg"]
		};
	var labels = {
		quickSearch: ["OLD SEARCH", "ITERATION #1", "ITERATION #2"],
		profile: ["PREVIOUS PROFILE UI", "ADD TO WATCHLIST USERFLOW", "CREATE NEW WATCHLIST USERFLOW", "NEW WATCHLIST USER FLOW (ERROR)"],
		profileCarousel: ["FUNDRAISING AND ASSETS", "HEDGE FUND SERVICE PROVIDERS", "HEDGE FUND STRATEGY", "HISTORIC ACTIVTY", "ASSETS ADVISED", "SERVICE PROVIDED", "KNOWN CLIENTS"]
	}

	// Initialize Carousel
	$('.main-carousel').flickity({
  		// options
  		contain: true,
  		wrapAround: true,
  		imagesLoaded: true
	});

	var $carousel = $('.main-carousel').flickity();
	 
	$carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
	// dismiss if cell was not clicked
 	if ( !cellElement ) {
    	return;
  	}
  	openModal(images.profileCarousel[cellIndex], labels.profileCarousel[cellIndex]);	
	});

		// Preqin Pro Click Events
	// Open Modal
	function openModal(param1, param2){
		$("#select-img").attr("src", param1);
		$("#modal-header").html(param2);
		$(".modal-bg").css("display", "block");
		$("body").addClass("modal-open");
		$("#modal-bg").scrollTop(0);
	}

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

	// Profile Pics
	$("#pro-img-1").click(function(){
		openModal(images.profile[0], labels.profile[0]);
	});

	$("#pro-img-2").click(function(){
		openModal(images.profile[1], labels.profile[1]);
	});

	$("#pro-img-3").click(function(){
		openModal(images.profile[2], labels.profile[2]);
	});

	$("#pro-img-4").click(function(){
		openModal(images.profile[3], labels.profile[3]);
	});

	// Close Modal
	$("#modal").on('click', function(event) {
		event.stopPropagation();
	});

	$(".modal-bg").click(function(){
		$(".modal-bg").css("display", "none");
		$("body").removeClass("modal-open");
	});



// End of preqinpro.js
})