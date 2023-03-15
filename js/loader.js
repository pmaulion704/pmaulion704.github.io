$(function() {
    $(window).on('load', function(){
        function fade(){
            $(".loader-wrapper").fadeOut('fast');
        };
        setTimeout(fade,250)
    });
});
