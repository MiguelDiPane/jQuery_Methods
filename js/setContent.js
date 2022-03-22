$(document).ready(function () {
    $("#btnResetText").click(function() { 
        $("#line1").text("This is another line of text");
    });
    $("#btnResetHTML").click(function() { 
        $("#line2").html("<b>Bold text line.</b>");
    });
    $("#btnResetValue").click(function() { 
        $("#name2").val("Jane Wills");
    });
});