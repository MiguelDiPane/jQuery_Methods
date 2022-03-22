$(document).ready(function () {
    $("#btnSetAttributes").click(function() { 
        $("#myLink2")
            .attr("href","https://www.google.com.ar/?hl=es")
            .text("Google");
    });
});