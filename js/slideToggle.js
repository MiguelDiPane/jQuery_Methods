/*
    slideToggle()
    $(selector).slideToggle(speed,callback);

*/

$(document).ready(function() {
    $("#topbar3").click(function() { 
        $("#panel3").slideToggle(1000);   
    });
});