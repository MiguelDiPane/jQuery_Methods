$(document).ready(function () {
    $("#btnGetAttributes").click(function() { 
        let attributes = $("#myLink").attr("href");
        $("#showAttributes").text("The attribute href is: " + attributes);
    });
});