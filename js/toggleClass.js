/*
    Toggle class
    $(selector).toggleClass("class_name");
*/

$(document).ready(function () {
    $("#btnToggleClass").click(function() { 
        $("#heading1T, #heading2T, #txtline1T, #txtline2T, #txtline3T").toggleClass("red");
        $("#txtline3T").toggleClass("big");
    });
});