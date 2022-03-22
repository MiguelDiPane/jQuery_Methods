/*
    slideDown()
    $(selector).slideDown(speed,callback);

*/

$(document).ready(function() {
    $("#topbar").click(function() { 
        $("#panel").slideDown(1000);   
    });
});