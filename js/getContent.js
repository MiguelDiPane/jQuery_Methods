$(document).ready(function () {
    $("#btnShowText").click(function() { 
        let text = $("#content").text();
        $("#show").html(text);
    });
    $("#btnShowHTML").click(function() { 
        let htmlCode = $("#content").html();
        $("#show").text(htmlCode);
    });
});