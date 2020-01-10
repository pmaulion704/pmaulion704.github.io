$(function() {
    $(window).on('load', function(){
        function fade(){
            $(".loader-wrapper").fadeOut('slow');
        };
        setTimeout(fade,2000)
    });
});
