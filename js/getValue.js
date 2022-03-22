$(document).ready(function () {
    $("#btnGetValue").click(function() { 
        let inputValue = $("#name").val();
        $("#showName").text("Your name is: " + inputValue);
    });
});