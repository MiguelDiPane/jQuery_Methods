$(document).ready(function(){
    /*$("*").css("margin","0");
    $("*").css("padding","0");
    $("*").css("box-sizing","border-box");*/
    let state = false;
    $(".hideButton").click(function(){
        if(!state){
            $("this").html("Show text");
            //Select all p elements
            $("p").hide();
            //Select only the element with head id
            $("#head").html("The text below is not visible");
            state = true;
        }
        else{
            $("this").html("Hide text");
            $("p").show();
            $("#head").html("The text below is visible");
            state = false;                    
        }
        
    });

    $("#redText").dblclick(function(){
        //this no anda con #redText arriba
        $("#redText").css("background-color","red");
    });

    /* mouse events using multiple event handlers */
    $("#recuadro").on({
        mouseenter: function () { 
            $("#recuadro").css("background-color","rgb(255, 145, 0)");
            $("#advertencia").html("Que te alejes! >:v");
        },
        mouseleave: function () { 
            $("#recuadro").css("background-color","aqua");
            $("#advertencia").html("No te me acerques!");
        },
        click: function(){
            $("#advertencia").html("Que apretas el div?");
        }
    });
    
    $("#advertencia").on({
        mouseenter: function () { 
            $("#recuadro").css("background-color","red");
            $("#advertencia").html("FUERA!!!!! >:v");
        },
    
        mouseleave: function () { 
            $("#recuadro").css("background-color","rgb(255, 145, 0)");
            $("#advertencia").html("Que te alejes! >:v");
        }
    });

    let state2 = false;
    $("#showHide").click(function(){
        if(!state2){
            $("#showHide").html("Show text");
            //Select all p elements
            $("#showHideText").hide(1000);
            state2 = true;
        }
        else{
            $("#showHide").html("Hide text");
            $("#showHideText").show(1000);
            state2 = false;                    
        }
        
    });


});
