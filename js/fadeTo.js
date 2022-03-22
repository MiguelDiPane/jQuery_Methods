/*
    fadeTo()
    $(selector).fadeTo(speed,opacity,callback);
*/

$(document).ready(function () {
    $("#btnFadeTo").click(function() { 
        $("#div9").fadeTo(2000,0.5);
    });    
});