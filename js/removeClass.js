/*
    Remove class
    $(selector).removeClass("class_name");
*/

$(document).ready(function () {
    $("#btnRemoveClass").click(function() { 
        $("#heading1R, #heading2R, #txtline1R, #txtline2R, #txtline3R").removeClass("red");
        $("#txtline3R").removeClass("big");
    });
});