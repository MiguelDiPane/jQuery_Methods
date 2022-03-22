$(document).ready(function () {
    $("#btnAppendText").click(function() { 
        $("#txtAppend").prepend("<b>Text at the beginning</b>. ");
        $("#txtAppend").append(" <b>More text</b>.");
    });
    $("#btnAppendItem").click(function() { 
        $("#listAppend").prepend("<li>New Sport</li>");
        $("#listAppend").append("<li>New Sport</li>");
    });
});