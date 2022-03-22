/*
    animate()
    $(selector).animate({params},speed,callback);
*/

$(document).ready(function () {
    $("#btnAnimate").click(function() { 
        /*$("#ball").animate({left:'800px',opacity:'0.4', height:'toggle', width:'toggle'},1000);*/
        /*Using relative size*/
        /*$("#ball").animate({left:'800px',opacity:'0.4', height:'+=100px', width:'+=100px'},1000);*/

        /*Uses queue functionality to perform a sequence of animations */
        var ball = $("#ball");
        ball.animate({left:'800px'},1000)
        ball.animate({top:'200px'},1000)
        ball.animate({left:'0'},1000)
        ball.animate({top:'0'},1000)
    });
});