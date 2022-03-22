/*
    Add class
    $(selector).addClass("class_name");
*/

$(document).ready(function () {
    $("#btnAddClass").click(function() { 
        $("#heading1, #heading2, #txtline1, #txtline2, #txtline3").addClass("red");
        $("#txtline3").addClass("big");
    });
});