$(function(){

	var images = [
		"http://res.cloudinary.com/pra1se/image/upload/v1528155341/modified-previous_uI_pnomhv.jpg"
	];

	var labels = [
		"PREVIOUS LANDING PAGE"
	];

	// Open Modal
	function openModal(param1, param2){
		$("#select-img").attr("src", param1);
		$("#modal-header").html(param2);
		$(".modal-bg").css("display", "block");
		$("body").addClass("modal-open");
		$("#modal-bg").scrollTop(0);
	};

	$("#prev-image-1").click(function(){
		openModal(images[0], labels[0]);
	});


	// Close Modal
	$("#modal").on('click', function(event) {
		event.stopPropagation();
	});

	$(".modal-bg").click(function(){
		$(".modal-bg").css("display", "none");
		$("body").removeClass("modal-open");
	});

});