/*
    slideUp()
    $(selector).slideUp(speed,callback);

*/

$(document).ready(function() {
    $("#topbar2").click(function() { 
        $("#panel2").slideUp(1000);   
    });
});