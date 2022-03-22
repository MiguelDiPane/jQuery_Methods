/*
    Fade In
    $(selector).fadeIn(speed,callback);
    Fade Out
    $(selector).fadeOut(speed,callback);
*/
$(document).ready(function(){
    let state = false;
    $("#btnFade").click(function(){
        if(!state){
            $("#div1").fadeIn();
            $("#div2").fadeIn(1000);
            $("#div3").fadeIn(3000);
            $("#div4").fadeIn(5000);
            $("#btnFade").html("Fade Out effect");
            state = true;
        }
        else{
            $("#div1").fadeOut(1000);
            $("#div2").fadeOut(1000);
            $("#div3").fadeOut(1000);
            $("#div4").fadeOut(1000);
            $("#btnFade").html("Fade In effect");
            state = false;
        }

    });
});