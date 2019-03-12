$(function(){
// Dribbble Shots Repository
	var shotIndex = 0; 
	let shots = [
		// Shots 1- 20
		[
			{
				"shot_number": "001",
				"src" : "../pmaulion704.github.io/images/daily100/001.jpg",
				"description" : "Sign Up"
			},
			{
				"shot_number": "002",
				"src" : "../pmaulion704.github.io/images/daily100/002.jpg",
				"description" : "Checkout"
			},
			{
				"shot_number": "003",
				"src" : "../pmaulion704.github.io/images/daily100/003.gif",
				"description" : "Landing Page"
			},
			{
				"shot_number": "004",
				"src" : "../pmaulion704.github.io/images/daily100/004.jpg",
				"description" : "Calculator"
			},
			{
				"shot_number": "005",
				"src" : "../pmaulion704.github.io/images/daily100/005.jpg",
				"description" : "App Icon"
			},
			{
				"shot_number": "006",
				"src" : "../pmaulion704.github.io/images/daily100/006.jpg",
				"description" : "User Profile"
			},
			{
				"shot_number": "007",
				"src" : "../pmaulion704.github.io/images/daily100/007.gif",
				"description" : "Settings"
			},
			{
				"shot_number": "008",
				"src" : "../pmaulion704.github.io/images/daily100/008.jpg",
				"description" : "404 Page"
			},
			{
				"shot_number": "009",
				"src" : "../pmaulion704.github.io/images/daily100/009.jpg",
				"description" : "Music Player"
			},
			{
				"shot_number": "010",
				"src" : "../pmaulion704.github.io/images/daily100/010.png",
				"description" : "Social Share"
			},
			{
				"shot_number": "011",
				"src" : "../pmaulion704.github.io/images/daily100/011.jpg",
				"description" : "Flash Messages"
			},
			{
				"shot_number": "012",
				"src" : "../pmaulion704.github.io/images/daily100/012.jpg",
				"description" : "Single Product"
			},
			{
				"shot_number": "013",
				"src" : "../pmaulion704.github.io/images/daily100/013.gif",
				"description" : "Direct Messaging"
			},
			{
				"shot_number": "014",
				"src" : "../pmaulion704.github.io/images/daily100/014.jpg",
				"description" : "Countdown Timer"
			},
			{
				"shot_number": "015",
				"src" : "../pmaulion704.github.io/images/daily100/015.jpg",
				"description" : "On/Off Switch"
			},
			{
				"shot_number": "016",
				"src" : "../pmaulion704.github.io/images/daily100/016.gif",
				"description" : "Popup / Overlay"
			},
			{
				"shot_number": "017",
				"src" : "../pmaulion704.github.io/images/daily100/017.jpg",
				"description" : "Email Receipt"
			},
			{
				"shot_number": "018",
				"src" : "../pmaulion704.github.io/images/daily100/018.gif",
				"description" : "Analytics Chart"
			},
			{
				"shot_number": "019",
				"src" : "../pmaulion704.github.io/images/daily100/019.gif",
				"description" : "Leaderboard"
			},
			{
				"shot_number": "020",
				"src" : "../pmaulion704.github.io/images/daily100/020.png",
				"description" : "Location Tracker"
			},
		],
		// Shots 21 - 40
		[
			{
				"shot_number": "021",
				"src" : "../pmaulion704.github.io/images/daily100/021.jpg",
				"description" : "Monitoring Dashboard"
			},
			{
				"shot_number": "022",
				"src" : "../pmaulion704.github.io/images/daily100/022.jpg",
				"description" : "Search"
			},
			{
				"shot_number": "023",
				"src" : "../pmaulion704.github.io/images/daily100/023.gif",
				"description" : "Onboarding"
			},
			{
				"shot_number": "024",
				"src" : "../pmaulion704.github.io/images/daily100/024.jpg",
				"description" : "Boarding Pass"
			},
			{
				"shot_number": "025",
				"src" : "../pmaulion704.github.io/images/daily100/025.jpg",
				"description" : "TV App"
			},
			{
				"shot_number": "026",
				"src" : "../pmaulion704.github.io/images/daily100/026.jpg",
				"description" : "Subscribe"
			},
			{
				"shot_number": "027",
				"src" : "../pmaulion704.github.io/images/daily100/027.gif",
				"description" : "Dropdown"
			},
			{
				"shot_number": "028",
				"src" : "../pmaulion704.github.io/images/daily100/028.jpg",
				"description" : "Contact Us"
			},
			{
				"shot_number": "029",
				"src" : "../pmaulion704.github.io/images/daily100/029.gif",
				"description" : "Map"
			},
			{
				"shot_number": "030",
				"src" : "../pmaulion704.github.io/images/daily100/030.jpg",
				"description" : "Pricing"
			},
			{
				"shot_number": "031",
				"src" : "../pmaulion704.github.io/images/daily100/031.gif",
				"description" : "File Upload"
			},
			{
				"shot_number": "032",
				"src" : "../pmaulion704.github.io/images/daily100/032.jpg",
				"description" : "Crowdfunding Campaign"
			},
			{
				"shot_number": "033",
				"src" : "../pmaulion704.github.io/images/daily100/033.jpg",
				"description" : "Customize Product"
			},
			{
				"shot_number": "034",
				"src" : "../pmaulion704.github.io/images/daily100/034.jpg",
				"description" : "Car Interface"
			},
			{
				"shot_number": "035",
				"src" : "../pmaulion704.github.io/images/daily100/035.gif",
				"description" : "Blog Post"
			},
			{
				"shot_number": "036",
				"src" : "../pmaulion704.github.io/images/daily100/036.jpg",
				"description" : "Special Offer"
			},
			{
				"shot_number": "037",
				"src" : "../pmaulion704.github.io/images/daily100/037.gif",
				"description" : "Weather"
			},
			{
				"shot_number": "038",
				"src" : "../pmaulion704.github.io/images/daily100/038.jpg",
				"description" : "Calendar"
			},
			{
				"shot_number": "039",
				"src" : "../pmaulion704.github.io/images/daily100/039.jpg",
				"description" : "Testimonials"
			},
			{
				"shot_number": "040",
				"src" : "../pmaulion704.github.io/images/daily100/040.gif",
				"description" : "Recipe"
			},
		],
		// Shots 41 - 60
		[
			{
				"shot_number": "041",
				"src" : "../pmaulion704.github.io/images/daily100/041.jpg",
				"description" : "Workout Tracker"
			},
			{
				"shot_number": "042",
				"src" : "../pmaulion704.github.io/images/daily100/042.gif",
				"description" : "ToDo List"
			},
			{
				"shot_number": "043",
				"src" : "../pmaulion704.github.io/images/daily100/043.gif",
				"description" : "Drink Menu"
			},
			{
				"shot_number": "044",
				"src" : "../pmaulion704.github.io/images/daily100/044.jpg",
				"description" : "Favorites"
			},
			{
				"shot_number": "045",
				"src" : "../pmaulion704.github.io/images/daily100/045.jpg",
				"description" : "Info Card"
			},
			{
				"shot_number": "046",
				"src" : "../pmaulion704.github.io/images/daily100/046.jpg",
				"description" : "Invoice"
			},
			{
				"shot_number": "047",
				"src" : "../pmaulion704.github.io/images/daily100/047.gif",
				"description" : "Activity Feed"
			},
			{
				"shot_number": "048",
				"src" : "../pmaulion704.github.io/images/daily100/048.gif",
				"description" : "Coming Soon"
			},
			{
				"shot_number": "049",
				"src" : "../pmaulion704.github.io/images/daily100/049.gif",
				"description" : "Notifications"
			},
			{
				"shot_number": "050",
				"src" : "../pmaulion704.github.io/images/daily100/050.jpg",
				"description" : "Job Listing"
			},
			{
				"shot_number": "051",
				"src" : "../pmaulion704.github.io/images/daily100/051.jpg",
				"description" : "Press Page"
			},
			{
				"shot_number": "052",
				"src" : "../pmaulion704.github.io/images/daily100/052.gif",
				"description" : "Daily UI Logo"
			},
			{
				"shot_number": "053",
				"src" : "../pmaulion704.github.io/images/daily100/053.jpg",
				"description" : "Header Navigation"
			},
			{
				"shot_number": "054",
				"src" : "../pmaulion704.github.io/images/daily100/054.jpg",
				"description" : "Confirm Reservation"
			},
			{
				"shot_number": "055",
				"src" : "../pmaulion704.github.io/images/daily100/055.jpg",
				"description" : "Icon Set"
			},
			{
				"shot_number": "056",
				"src" : "../pmaulion704.github.io/images/daily100/056.gif",
				"description" : "Breadcrumbs"
			},
			{
				"shot_number": "057",
				"src" : "../pmaulion704.github.io/images/daily100/057.jpg",
				"description" : "Video Player"
			},
			{
				"shot_number": "058",
				"src" : "../pmaulion704.github.io/images/daily100/058.jpg",
				"description" : "Shopping Cart"
			},
			{
				"shot_number": "059",
				"src" : "../pmaulion704.github.io/images/daily100/059.jpg",
				"description" : "Background Pattern"
			},
			{
				"shot_number": "060",
				"src" : "../pmaulion704.github.io/images/daily100/060.gif",
				"description" : "Color Picker"
			},
		],
		// Shots 61- 80
		[
			{
				"shot_number": "061",
				"src" : "../pmaulion704.github.io/images/daily100/061.gif",
				"description" : "Redeem Coupon"
			},
			{
				"shot_number": "062",
				"src" : "../pmaulion704.github.io/images/daily100/062.gif",
				"description" : "Workout of the Day"
			},
			{
				"shot_number": "063",
				"src" : "../pmaulion704.github.io/images/daily100/063.gif",
				"description" : "Best of 2018"
			},
			{
				"shot_number": "064",
				"src" : "../pmaulion704.github.io/images/daily100/064.gif",
				"description" : "Select User Type"
			},
			{
				"shot_number": "065",
				"src" : "../pmaulion704.github.io/images/daily100/065.jpg",
				"description" : "Notes Widget"
			},
			{
				"shot_number": "066",
				"src" : "../pmaulion704.github.io/images/daily100/066.gif",
				"description" : "Statistics"
			},
			{
				"shot_number": "067",
				"src" : "../pmaulion704.github.io/images/daily100/067.gif",
				"description" : "Hotel Booking"
			},
			{
				"shot_number": "068",
				"src" : "../pmaulion704.github.io/images/daily100/068.gif",
				"description" : "Flight Search"
			},
			{
				"shot_number": "069",
				"src" : "../pmaulion704.github.io/images/daily100/069.jpg",
				"description" : "Trending"
			},
			{
				"shot_number": "070",
				"src" : "../pmaulion704.github.io/images/daily100/070.gif",
				"description" : "Event Listing"
			},
			{
				"shot_number": "071",
				"src" : "../pmaulion704.github.io/images/daily100/071.gif",
				"description" : "Schedule"
			},
			{
				"shot_number": "072",
				"src" : "../pmaulion704.github.io/images/daily100/072.gif",
				"description" : "Image Slider"
			},
			{
				"shot_number": "073",
				"src" : "../pmaulion704.github.io/images/daily100/073.gif",
				"description" : "Virtual Reality"
			},
			{
				"shot_number": "074",
				"src" : "../pmaulion704.github.io/images/daily100/074.gif",
				"description" : "Download App"
			},
			{
				"shot_number": "075",
				"src" : "../pmaulion704.github.io/images/daily100/075.jpg",
				"description" : "Pre-Order"
			},
			{
				"shot_number": "076",
				"src" : "../pmaulion704.github.io/images/daily100/076.gif",
				"description" : "Loading"
			},
			{
				"shot_number": "077",
				"src" : "../pmaulion704.github.io/images/daily100/077.gif",
				"description" : "Thank You"
			},
			{
				"shot_number": "078",
				"src" : "../pmaulion704.github.io/images/daily100/078.gif",
				"description" : "Pending Invitation"
			},
			{
				"shot_number": "079",
				"src" : "../pmaulion704.github.io/images/daily100/079.gif",
				"description" : "Itinerary"
			},
			{
				"shot_number": "080",
				"src" : "../pmaulion704.github.io/images/daily100/080.gif",
				"description" : "Date Picker"
			},
		],
		// Shots 81 - 100
		[
			{
				"shot_number": "081",
				"src" : "../pmaulion704.github.io/images/daily100/081.jpg",
				"description" : "Status Update"
			},
			{
				"shot_number": "082",
				"src" : "../pmaulion704.github.io/images/daily100/082.jpg",
				"description" : "Form"
			},
			{
				"shot_number": "083",
				"src" : "../pmaulion704.github.io/images/daily100/083.gif",
				"description" : "Button"
			},
			{
				"shot_number": "084",
				"src" : "../pmaulion704.github.io/images/daily100/084.jpg",
				"description" : "Badge"
			},
			{
				"shot_number": "085",
				"src" : "../pmaulion704.github.io/images/daily100/085.gif",
				"description" : "Pagination"
			},
			{
				"shot_number": "086",
				"src" : "../pmaulion704.github.io/images/daily100/086.gif",
				"description" : "Progress Bar"
			},
			{
				"shot_number": "087",
				"src" : "../pmaulion704.github.io/images/daily100/087.gif",
				"description" : "Tooltip"
			},
			{
				"shot_number": "088",
				"src" : "../pmaulion704.github.io/images/daily100/088.jpg",
				"description" : "Avatar"
			},
			{
				"shot_number": "089",
				"src" : "../pmaulion704.github.io/images/daily100/089.jpg",
				"description" : "Terms of Service"
			},
			{
				"shot_number": "090",
				"src" : "../pmaulion704.github.io/images/daily100/090.jpg",
				"description" : "Create New"
			},
			{
				"shot_number": "091",
				"src" : "../pmaulion704.github.io/images/daily100/091.gif",
				"description" : "Curated For You"
			},
			{
				"shot_number": "092",
				"src" : "../pmaulion704.github.io/images/daily100/092.gif",
				"description" : "FAQ"
			},
			{
				"shot_number": "093",
				"src" : "../pmaulion704.github.io/images/daily100/093.gif",
				"description" : "Splash Screen"
			},
			{
				"shot_number": "094",
				"src" : "../pmaulion704.github.io/images/daily100/094.jpg",
				"description" : "News"
			},
			{
				"shot_number": "095",
				"src" : "../pmaulion704.github.io/images/daily100/095.gif",
				"description" : "Product Tour"
			},
			{
				"shot_number": "096",
				"src" : "../pmaulion704.github.io/images/daily100/096.jpg",
				"description" : "In Stock"
			},
			{
				"shot_number": "097",
				"src" : "../pmaulion704.github.io/images/daily100/097.jpg",
				"description" : "Invitation"
			},
			{
				"shot_number": "098",
				"src" : "../pmaulion704.github.io/images/daily100/098.gif",
				"description" : "Advertisement"
			},
			{
				"shot_number": "099",
				"src" : "../pmaulion704.github.io/images/daily100/099.jpg",
				"description" : "Categories"
			},
			{
				"shot_number": "100",
				"src" : "../pmaulion704.github.io/images/daily100/100.jpg",
				"description" : "Daily UI "
			},
		]
	]

	// FUNCTIONS
	// POPULATE 20 Box Framework
	function test(array, item1, item2, item3) {	
		for (var i = 0; i < array.length; i++) {
			var universal_ID = i + 1;
			var string_ID = universal_ID.toString();
			$("#shotID" + string_ID).html(array[i][item1]);
			$("#s-descriptID" + string_ID).html(array[i][item3]);
			$("#s-shotID" + string_ID).html(array[i][item1]);
			$("#imgID" + string_ID).attr("src", array[i][item2]);
			$("#descriptID" + string_ID).html(array[i][item3]);
		};
	};

	// SCROLL TO TOP
	function scrollTop() {
		$('html, body').animate({
      scrollTop: 0}, 800);
	}

	// Click Events
	// Navigation Large Breakpoint
	$("#first-twenty").click(function() {	
		$(this).addClass("navigation-selected");
		$("#second-twenty").removeClass("navigation-selected");
		$("#third-twenty").removeClass("navigation-selected");
		$("#fourth-twenty").removeClass("navigation-selected");
		$("#fifth-twenty").removeClass("navigation-selected");
		test(shots[0], "shot_number", "src", "description");
		scrollTop();
	});

	$("#second-twenty").click(function() {	
		$(this).addClass("navigation-selected");
		$("#first-twenty").removeClass("navigation-selected");
		$("#third-twenty").removeClass("navigation-selected");
		$("#fourth-twenty").removeClass("navigation-selected");
		$("#fifth-twenty").removeClass("navigation-selected");
		test(shots[1], "shot_number", "src", "description");
		scrollTop();
	});

	$("#third-twenty").click(function() {	
		$(this).addClass("navigation-selected");
		$("#first-twenty").removeClass("navigation-selected");
		$("#second-twenty").removeClass("navigation-selected");
		$("#fourth-twenty").removeClass("navigation-selected");
		$("#fifth-twenty").removeClass("navigation-selected");
		test(shots[2], "shot_number", "src", "description");
		scrollTop();
	});

	$("#fourth-twenty").click(function() {	
		$(this).addClass("navigation-selected");
		$("#first-twenty").removeClass("navigation-selected");
		$("#second-twenty").removeClass("navigation-selected");
		$("#third-twenty").removeClass("navigation-selected");
		$("#fifth-twenty").removeClass("navigation-selected");
		test(shots[3], "shot_number", "src", "description");
		scrollTop();
	});

	$("#fifth-twenty").click(function() {	
		$(this).addClass("navigation-selected");
		$("#first-twenty").removeClass("navigation-selected");
		$("#second-twenty").removeClass("navigation-selected");
		$("#third-twenty").removeClass("navigation-selected");
		$("#fourth-twenty").removeClass("navigation-selected");
		test(shots[4], "shot_number", "src", "description");
		scrollTop();
	});

	// Navigation Small Breakpoint
	var counterIndex = 0;
	var counter = ["1-20", "21-40", "41-60", "61-80", "81-100"];

	$("#right-chevron").click(function(){
		if (counterIndex != 4) {
			counterIndex++;
			$("#small-counter").html(counter[counterIndex]);
		} else {
			counterIndex = 0;
			$("#small-counter").html(counter[counterIndex]);
		}
	});

	$("#left-chevron").click(function(){
		if (counterIndex != 0) {
			counterIndex--;
			$("#small-counter").html(counter[counterIndex]);
		} else {
			counterIndex = 4;
			console.log("this is else plan");
			$("#small-counter").html(counter[counterIndex]);
		}
	});

	// End of index.js
});