/*
    Filter remove
    $(selector).remove(filters);

*/

$(document).ready(function () {
    $("#btnFilterRemove").click(function() { 
        $("p").remove(".rem1, .rem2"); //with class rem1 or rem2
    });
});