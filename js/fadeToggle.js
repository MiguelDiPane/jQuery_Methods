/*
    fadeToggle()
    $(selector).fadeToggle(speed,callback);
*/

$(document).ready(function () {
    $("#btnFadeToggle").click(function() { 
        $("#div5").fadeToggle(1000);
        $("#div6").fadeToggle(1000);
        $("#div7").fadeToggle(1000);
        $("#div8").fadeToggle(1000);  
    });    
});