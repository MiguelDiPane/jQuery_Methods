/*
    stop()
    $(selector).stop(stopAll,goToEnd);
*/

$(document).ready(function () {
    var ball2 = $("#ball2");
    $("#btnStart").click(function(){
        ball2.animate({left:'800px'},1000)
        ball2.animate({top:'200px'},1000)
        ball2.animate({left:'0'},1000)
        ball2.animate({top:'0'},1000)
    })
    $("#btnStop").click(function() { 
        ball2.stop(stopAll=true);
    });
});