$(document).ready(function() {
    $("#alertQS").hide();
    $("#alertAS").hide();
    $('#searchVideo').bind("timeupdate", function() {
        if(this.currentTime > 74) {
            $("#alertQS").fadeIn();
        } else {
            $("#alertQS").hide();
        }
    });
    $('#searchVideo2').bind("timeupdate", function() {
        if(this.currentTime < 73) {
            $("#alertAS").fadeIn();
        } else {
            $("#alertAS").hide();
        }
    });
});
