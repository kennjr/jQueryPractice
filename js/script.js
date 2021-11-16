jQuery(document).ready(function () {
    jQuery('h1').click(function(){
        alert("This is a heading tag");
        alert("I told you, THIS IS A HEADER!");
    });
    
    jQuery('.clickable').click(function(){
        // $("img").show();
        $("#walrus-hidden").slideToggle();
        $("#walrus-showing").slideToggle();
    });
    
    jQuery('img').click(function(){
        alert("This is an image")
    }); 

    jQuery(".show_images").click( () => {
        const text = document.querySelector(".show_images");
        let value = jQuery("imgVisibilityStatus").val();
        if(text.innerHTML.toString() == "Show images"){
            text.innerHTML = "Hide images";
            $("#walrus-showing").fadeToggle();
        }else{
            text.innerHTML = "Show images";
            $("#walrus-showing").fadeToggle();
        }
    })

    $("button#green").click(function() {
        // We remove the old class(es) b4 adding the one we want
        $("body").removeClass();
        // We're adding the class to the body so the entire body should be styled differently
        $("body").addClass("green-background");
    });

    $("button#mode").click(() => {
        $("body").removeClass()
        const btn_text = document.querySelector("#mode");
        if(btn_text.innerHTML.toString() == "dark theme"){
            $("body").addClass("light_theme");
            btn_text.innerHTML = "light theme"
        }else{
            $("body").addClass("dark_theme");
            btn_text.innerHTML = "dark theme"
        }
    })

    $("button#yellow").click(function() {
        $("body").removeClass();
        $("body").addClass("yellow-background");
    });

    $("button#red").click(function() {
        $("body").removeClass();
        $("body").addClass("red-background");
    });
});

function leapYearCalculator (year){
    if(!isNaN(year)){
        let yearInt = parseInt(year);
        if((yearInt%4) == 0){
            console.log(yearInt + " is a leap year");
        }
        else{
            console.log("This is not a leap year");
        }
    }else{
        alert("The input isnt a number");
    }
}
