/*
    Insert before or after
    $(selector).before(content);
    $(selector).after(content),
*/

$(document).ready(function () {
    $("#btnInsertBefore").click(function() { 
        $("#cat").before("<b>Text added before element</b>. ");
    });
    $("#btnInsertAfter").click(function() { 
        $("#cat").after(" <i>Text added after element</i>.");
    });
});