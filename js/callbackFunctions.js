/*
    Callback Functions
    $(selector).hide(speed,callback);
*/

$(document).ready(function () {
    $("#btnHide").click(function(){
        /*We need the callback function to show the alert after the animation finishes*/
        $("#square").hide(1000,function(){
            alert("The square is now hidden.");
        });
    });
});