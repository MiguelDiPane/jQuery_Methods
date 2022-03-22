//Toggle syntax: $(selector).toggle(speed,callback);
$(document).ready(function(){
    $("#btnToggle").click(function(){
        $("#txtToggle").toggle(1000); //1000ms
    });
});