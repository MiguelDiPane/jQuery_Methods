/*
    Remove an element
    $(selector).remove();
    $(selector).empty();
*/

$(document).ready(function () {
    $("#btnRemove").click(function() { 
        $("#cat2").remove();
    });
});