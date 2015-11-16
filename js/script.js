$(document).ready(function() {
        var ei = $("#eitje")[0].offsetWidth;
        var screen = $(".container")[0].offsetWidth;
        var screenhalf;
        var eihalf;
            eihalf = ei/2;
            screenhalf = screen/2;
        var midden = screenhalf - eihalf;
        $("#eitje").css("left",midden);
    window.addEventListener("resize", opscherm);
    function opscherm() {
        var ei = $("#eitje")[0].offsetWidth;
        var screen = $(".container")[0].offsetWidth;
        var screenhalf;
        var eihalf;
            eihalf = ei/2;
            screenhalf = screen/2;
        var midden = screenhalf - eihalf;
        $("#eitje").css("left",midden);
    }  

    //form validation

    $('#contactForm').validate({
        rules: {
            emailadres: {
                required: true,
                email: true
            },
            bericht: {
                required: true
            },
            highlight: function (element) {
                $(element).parent().addClass('error')
            },
            unhighlight: function (element) {
                $(element).parent().removeClass('error')
            },
            submitHandler: function(form) {
                $(element).ajaxSubmit();
            }
        }
    });
    //http://code.runnable.com/UkmCKF6ekb0tAAC-/how-to-use-jquery-validation-custom-messages-and-placement
    //end form validation

});

window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)};
 
parallaxcube();
function parallaxcube(){
 var stuk1 = document.getElementById('stuk1');
 var stuk2 = document.getElementById('stuk2');
 var stuk3 = document.getElementById('stuk3');
 var stuk4 = document.getElementById('stuk4');
 var stuk5 = document.getElementById('stuk5');
 var stuk6 = document.getElementById('stuk6');
 var stuk7 = document.getElementById('stuk7');
 var stuk8 = document.getElementById('stuk8');
 var stuk9 = document.getElementById('stuk9');
 var stuk10 = document.getElementById('stuk10');
 var stuk11 = document.getElementById('stuk11');
 var stuk12 = document.getElementById('stuk12');
 var stuk13 = document.getElementById('stuk13');
 var stuk14 = document.getElementById('stuk14');
    
 var scrolltop = window.scrollY; // get number of pixels document has scrolled vertically
 
 var stuk1top;
 var stuk1left;
 var stuk2top;
 var stuk2left;
 var stuk3top;
 var stuk3left;
 var stuk4top;
 var stuk4left;
 var stuk5top;
 var stuk5left;
 var stuk6top;
 var stuk6left;
 var stuk7top;
 var stuk7left;
 var stuk8top;
 var stuk8left;
 var stuk9top;
 var stuk9left;
 var stuk10top;
 var stuk10left;
 var stuk11top;
 var stuk11left;
 var stuk12top;
 var stuk12left;
 var stuk13top;
 var stuk13left;
 var stuk14top;
 var stuk14left;
    

 stuk1top = -200 + (scrolltop * 0.3 );
 stuk1left = -300 + (scrolltop * 0.45 );
    
 stuk2top = -0 + (scrolltop * 0.0 );
 stuk2left = -300 + (scrolltop * 0.45 );
    
 stuk3top = -200 + (scrolltop * 0.3 );
 stuk3left = -600 + (scrolltop * 0.9 );
    
 stuk4top = -200 + (scrolltop * 0.3 );
 stuk4left = -20 + (scrolltop * 0.03 );
    
 stuk5top = -400 + (scrolltop * 0.6 );
 stuk5left = 20 + (scrolltop * -0.03 );
    
 stuk6top = -200 + (scrolltop * 0.3 );
 stuk6left = 300 + (scrolltop * -0.45 );
    
 stuk7top = 100 + (scrolltop * -0.15 );
 stuk7left = -600 + (scrolltop * 0.9 );
    
 stuk8top = 200 + (scrolltop * -0.3 );
 stuk8left = -200 + (scrolltop * 0.3 );
    
 stuk9top = 200 + (scrolltop * -0.3 );
 stuk9left = 100 + (scrolltop * -0.15 );
    
 stuk10top = -100 + (scrolltop * 0.15 );
 stuk10left = 600 + (scrolltop * -0.9 ); 
    
 stuk11top = 20 + (scrolltop * -0.03 );
 stuk11left = 200 + (scrolltop * -0.3 ); 
    
 stuk12top = 600 + (scrolltop * -0.9 );
 stuk12left = -20 + (scrolltop * 0.03 );
    
 stuk13top = 200 + (scrolltop * -0.3 );
 stuk13left = 200 + (scrolltop * -0.3 );
    
 stuk14top = 200 + (scrolltop * -0.3 );
 stuk14left = 400 + (scrolltop * -0.6 );    
    
 if(stuk1top > 1){
 	stuk1top = 0;
 	stuk1left = 0; //1
    stuk2top = 0;
 	stuk2left = 0; //2
    stuk3top = 0;
 	stuk3left = 0; //3
    stuk4top = 0;
 	stuk4left = 0; //4
    stuk5top = 0;
 	stuk5left = 0; //5
    stuk6top = 0;
 	stuk6left = 0; //6
    stuk7top = 0;
 	stuk7left = 0; //7
    stuk8top = 0;
 	stuk8left = 0; //8
    stuk9top = 0;
 	stuk9left = 0; //9
    stuk10top = 0;
 	stuk10left = 0; //10
    stuk11top = 0;
 	stuk11left = 0; //11
    stuk12top = 0;
 	stuk12left = 0; //12
    stuk13top = 0;
 	stuk13left = 0; //13
    stuk14top = 0;
 	stuk14left = 0; //14
    //$(".eiAchtergrond").animate({ opacity: 1 }, 1000 );
    $("#dot1").addClass("animation fadeIn1");
    $("#dot2").addClass("animation fadeIn2");
    $("#dot3").addClass("animation fadeIn3");
    $("#dot4").addClass("animation fadeIn5");
    $("#dot5").addClass("animation fadeIn3");
    $("#dot6").addClass("animation fadeIn1");
    $("#dot7").addClass("animation fadeIn8");
    $("#dot8").addClass("animation fadeIn4");
    $("#dot9").addClass("animation fadeIn7");
    $("#dot10").addClass("animation fadeIn6");
    $("#dot11").addClass("animation fadeIn2");
    $("#dot12").addClass("animation fadeIn4");
     
    $("#stuk1t").addClass("animation fadeIn1");
    $("#stuk2t").addClass("animation fadeIn2");
    $("#stuk3t").addClass("animation fadeIn3");
    $("#stuk4t").addClass("animation fadeIn5");
    $("#stuk5t").addClass("animation fadeIn3");
    $("#stuk6t").addClass("animation fadeIn1");
    $("#stuk7t").addClass("animation fadeIn8");
    $("#stuk8t").addClass("animation fadeIn4");
    $("#stuk9t").addClass("animation fadeIn7");
    $("#stuk10t").addClass("animation fadeIn6");
    $("#stuk11t").addClass("animation fadeIn2");
    $("#stuk12t").addClass("animation fadeIn4");
    $("#stuk13t").addClass("animation fadeIn7");
    $("#stuk14t").addClass("animation fadeIn8");
    $("#titleLogo").addClass("animation fadeIn8"); 
 }
 else if (stuk1top < 1)
 {
    //$(".eiAchtergrond").animate({ opacity: 0 }, 0 );
    $("#dot1").removeClass("animation fadeIn1");
    $("#dot2").removeClass("animation fadeIn2");
    $("#dot3").removeClass("animation fadeIn3");
    $("#dot4").removeClass("animation fadeIn5");
    $("#dot5").removeClass("animation fadeIn3");
    $("#dot6").removeClass("animation fadeIn1");
    $("#dot7").removeClass("animation fadeIn8");
    $("#dot8").removeClass("animation fadeIn4");
    $("#dot9").removeClass("animation fadeIn7");
    $("#dot10").removeClass("animation fadeIn6");
    $("#dot11").removeClass("animation fadeIn2");
    $("#dot12").removeClass("animation fadeIn4");
     
    $("#stuk1t").removeClass("animation fadeIn1");
    $("#stuk2t").removeClass("animation fadeIn2");
    $("#stuk3t").removeClass("animation fadeIn3");
    $("#stuk4t").removeClass("animation fadeIn5");
    $("#stuk5t").removeClass("animation fadeIn3");
    $("#stuk6t").removeClass("animation fadeIn1");
    $("#stuk7t").removeClass("animation fadeIn8");
    $("#stuk8t").removeClass("animation fadeIn4");
    $("#stuk9t").removeClass("animation fadeIn7");
    $("#stuk10t").removeClass("animation fadeIn6");
    $("#stuk11t").removeClass("animation fadeIn2");
    $("#stuk12t").removeClass("animation fadeIn4");
    $("#stuk13t").removeClass("animation fadeIn7");
    $("#stuk14t").removeClass("animation fadeIn8");
    $("#titleLogo").removeClass("animation fadeIn8");
 }
     stuk1.style.top = stuk1top + '%';
     stuk1.style.left = stuk1left + '%'; //1
     stuk2.style.top = stuk2top + '%';
     stuk2.style.left = stuk2left + '%'; //2
     stuk3.style.top = stuk3top + '%';
     stuk3.style.left = stuk3left + '%'; //3
     stuk4.style.top = stuk4top + '%';
     stuk4.style.left = stuk4left + '%'; //4
     stuk5.style.top = stuk5top + '%';
     stuk5.style.left = stuk5left + '%'; //5
     stuk6.style.top = stuk6top + '%';
     stuk6.style.left = stuk6left + '%'; //6
     stuk7.style.top = stuk7top + '%';
     stuk7.style.left = stuk7left + '%'; //7
     stuk8.style.top = stuk8top + '%';
     stuk8.style.left = stuk8left + '%'; //8
     stuk9.style.top = stuk9top + '%';
     stuk9.style.left = stuk9left + '%'; //9
     stuk10.style.top = stuk10top + '%';
     stuk10.style.left = stuk10left + '%'; //10
     stuk11.style.top = stuk11top + '%';
     stuk11.style.left = stuk11left + '%'; //11
     stuk12.style.top = stuk12top + '%';
     stuk12.style.left = stuk12left + '%'; //12
     stuk13.style.top = stuk13top + '%';
     stuk13.style.left = stuk13left + '%'; //13
     stuk14.style.top = stuk14top + '%';
     stuk14.style.left = stuk14left + '%'; //14

}
 
window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxcube); // call parallaxcube() on next available screen paint
}, false);