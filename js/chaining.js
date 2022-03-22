/*  jQuery Chaining */

$(document).ready(function () {
    $("#btnChaining").click(function(){
        $("#square2").css("background","red")
            .slideUp(2000)
            .slideDown(2000);
    });
});