$(document).ready(function() {
opscherm();
    window.addEventListener("resize", opscherm);
    function opscherm() {
        var scrolltop = window.scrollY;
        var ei = $("#eitje")[0].offsetWidth;
        var eiH = $("#eitje")[0].offsetHeight;
        var eiHalf = eiH/2;
        var screen = $(".landing")[0].offsetWidth;
        var wHight = $(window).height();
        var screenheightC = wHight/2;
        var screenhalf;
        var eihalf;
            eihalf = ei/2;
            screenhalf = screen/2;
        var midden = screenhalf - eihalf;
        var middenH = screenheightC - eiHalf;
        $("#eitje").css("left",midden);
        $("#eitje").css("top",middenH);
        parallaxcube();
    }   
});

window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)};

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
 var eitje = document.getElementById('eitje');
 var bg_scroll = document.getElementById("bg_fixed");
 
 var scrolltop = window.scrollY; // get number of pixels document has scrolled vertically
 
 var stuk1top;
 var stuk1left;
 var stuk1opacity;
 var stuk2top;
 var stuk2left;
 var stuk2opacity;
 var stuk3top;
 var stuk3left;
 var stuk3opacity;
 var stuk4top;
 var stuk4left;
 var stuk4opacity;
 var stuk5top;
 var stuk5left;
 var stuk5opacity;    
 var stuk6top;
 var stuk6left;
 var stuk6opacity;
 var stuk7top;
 var stuk7left;
 var stuk7opacity;
 var stuk8top;
 var stuk8left;
 var stuk8opacity;    
 var stuk9top;
 var stuk9left;
 var stuk9opacity;    
 var stuk10top;
 var stuk10left;
 var stuk10opacity;
 var stuk11top;
 var stuk11left;
 var stuk11opacity;
 var stuk12top;
 var stuk12left;
 var stuk12opacity;
 var stuk13top;
 var stuk13left;
 var stuk13opacity;
 var stuk14top;
 var stuk14left;
 var stuk14opacity;
 var eitjetop;
 var bgtop;
 var screen = $(".landing")[0].offsetWidth;
 stuk1top = -200 + (scrolltop * 0.3 );
 stuk1left = -300 + (scrolltop * 0.45 );
 stuk1opacity = 0.5 + (scrolltop * 0.002);
    
 stuk2top = -0 + (scrolltop * 0.0 );
 stuk2left = -300 + (scrolltop * 0.45 );
 stuk2opacity = 0.3 + (scrolltop * 0.002);
    
 stuk3top = -200 + (scrolltop * 0.3 );
 stuk3left = -600 + (scrolltop * 0.9 );
 stuk3opacity = 0.2 + (scrolltop * 0.002);
    
 stuk4top = -200 + (scrolltop * 0.3 );
 stuk4left = -20 + (scrolltop * 0.03 );
 stuk4opacity = 0.6 + (scrolltop * 0.002);
    
 stuk5top = -400 + (scrolltop * 0.6 );
 stuk5left = 20 + (scrolltop * -0.03 );
 stuk5opacity = 0.2 + (scrolltop * 0.002);
    
 stuk6top = -200 + (scrolltop * 0.3 );
 stuk6left = 300 + (scrolltop * -0.45 );
 stuk6opacity = 0.2 + (scrolltop * 0.002);
    
 stuk7top = 100 + (scrolltop * -0.15 );
 stuk7left = -600 + (scrolltop * 0.9 );
 stuk7opacity = 0.5 + (scrolltop * 0.002);
    
 stuk8top = 200 + (scrolltop * -0.3 );
 stuk8left = -200 + (scrolltop * 0.3 );
 stuk8opacity = 0.4 + (scrolltop * 0.002);
    
 stuk9top = 200 + (scrolltop * -0.3 );
 stuk9left = 100 + (scrolltop * -0.15 );
 stuk9opacity = 0.2 + (scrolltop * 0.002);
    
 stuk10top = -100 + (scrolltop * 0.15 );
 stuk10left = 600 + (scrolltop * -0.9 );
 stuk10opacity = 0.1 + (scrolltop * 0.002);
    
 stuk11top = 20 + (scrolltop * -0.03 );
 stuk11left = 200 + (scrolltop * -0.3 );
 stuk11opacity = 0.2 + (scrolltop * 0.002);
    
 stuk12top = 600 + (scrolltop * -0.9 );
 stuk12left = -20 + (scrolltop * 0.03 );
 stuk12opacity = 0.1 + (scrolltop * 0.002);
    
 stuk13top = 200 + (scrolltop * -0.3 );
 stuk13left = 200 + (scrolltop * -0.3 );
 stuk13opacity = 0.5 + (scrolltop * 0.002);
    
 stuk14top = 200 + (scrolltop * -0.3 );
 stuk14left = 400 + (scrolltop * -0.6 );
 stuk14opacity = 0.6 + (scrolltop * 0.002);
    
 if(screen < 769){
    stuk1top = 2;
 }
    
 if(stuk1top > 1 ){
 	stuk1top = 0;
 	stuk1left = 0; //1
    stuk1opacity = 1;
    stuk2top = 0;
 	stuk2left = 0; //2
    stuk2opacity = 1;
    stuk3top = 0;
 	stuk3left = 0; //3
    stuk3opacity = 1;
    stuk4top = 0;
 	stuk4left = 0; //4
    stuk4opacity = 1;
    stuk5top = 0;
 	stuk5left = 0; //5
    stuk5opacity = 1;
    stuk6top = 0;
 	stuk6left = 0; //6
    stuk6opacity = 1;
    stuk7top = 0;
 	stuk7left = 0; //7
    stuk7opacity = 1;
    stuk8top = 0;
 	stuk8left = 0; //8
    stuk8opacity = 1;
    stuk9top = 0;
 	stuk9left = 0; //9
    stuk9opacity = 1;
    stuk10top = 0;
 	stuk10left = 0; //10
    stuk10opacity = 1;
    stuk11top = 0;
 	stuk11left = 0; //11
    stuk11opacity = 1;
    stuk12top = 0;
 	stuk12left = 0; //12
    stuk12opacity = 1;
    stuk13top = 0;
 	stuk13left = 0; //13
    stuk13opacity = 1;
    stuk14top = 0;
 	stuk14left = 0; //14
    stuk14opacity = 1;
     
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
    $("#titleLogo").addClass("animation fadeIn1");
 }
 else if (stuk1top < 1)
 {
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
    $("#titleLogo").removeClass("animation fadeIn1");
 }
    
    var ei_pos = $("#eitje").position().top;
    var eiH = $("#eitje")[0].offsetHeight;
        var eiHalf = eiH/2;
        var wHight = $(window).height();
        var screenheightC = wHight/2;
        var middenH = screenheightC - eiHalf;
        var containerH = $(".landing")[0].offsetHeight;
    if(scrolltop > containerH /2){
        eitjetop = middenH + (containerH /2) + (scrolltop * -1 );
        $(".bg-wrapper").css("opacity","0");
        $(".bg-wrapper").css("z-index","-1");       
    } else {
        eitjetop = middenH;
        $(".bg-wrapper").css("opacity","1");
        $(".bg-wrapper").css("z-index","1");
    }
     bg_scroll.style.top = eitjetop - middenH + "px";
     /*eitje.style.top = eitjetop + "px";*/
     eitje.style.transform = "translateY("+ eitjetop +"px)";
     eitje.style.msTransform = "translateY("+ eitjetop +"px)";
     eitje.style.WebkitTransform = "translateY("+ eitjetop +"px)";
    
     stuk1.style.transform ="translate("+ stuk1left +"%,"+ stuk1top +"%)";
     stuk1.style.msTransform ="translate("+ stuk1left +"%,"+ stuk1top +"%)";
     stuk1.style.WebkitTransform ="translate("+ stuk1left +"%,"+ stuk1top +"%)";
     
     stuk2.style.transform ="translate("+ stuk2left +"%,"+ stuk2top +"%)";
     stuk2.style.msTransform ="translate("+ stuk2left +"%,"+ stuk2top +"%)";
     stuk2.style.WebkitTransform ="translate("+ stuk2left +"%,"+ stuk2top +"%)";
     
    stuk3.style.transform ="translate("+ stuk3left +"%,"+ stuk3top +"%)";
     stuk3.style.msTransform ="translate("+ stuk3left +"%,"+ stuk3top +"%)";
     stuk3.style.WebkitTransform ="translate("+ stuk3left +"%,"+ stuk3top +"%)";
    
    stuk4.style.transform ="translate("+ stuk4left +"%,"+ stuk4top +"%)";
     stuk4.style.msTransform ="translate("+ stuk4left +"%,"+ stuk4top +"%)";
     stuk4.style.WebkitTransform ="translate("+ stuk4left +"%,"+ stuk4top +"%)";
    
    stuk5.style.transform ="translate("+ stuk5left +"%,"+ stuk5top +"%)";
     stuk5.style.msTransform ="translate("+ stuk5left +"%,"+ stuk5top +"%)";
     stuk5.style.WebkitTransform ="translate("+ stuk5left +"%,"+ stuk5top +"%)";
    
    stuk6.style.transform ="translate("+ stuk6left +"%,"+ stuk6top +"%)";
     stuk6.style.msTransform ="translate("+ stuk6left +"%,"+ stuk6top +"%)";
     stuk6.style.WebkitTransform ="translate("+ stuk6left +"%,"+ stuk6top +"%)";
    
    stuk7.style.transform ="translate("+ stuk7left +"%,"+ stuk7top +"%)";
     stuk7.style.msTransform ="translate("+ stuk7left +"%,"+ stuk7top +"%)";
     stuk7.style.WebkitTransform ="translate("+ stuk7left +"%,"+ stuk7top +"%)";
    
    stuk8.style.transform ="translate("+ stuk8left +"%,"+ stuk8top +"%)";
     stuk8.style.msTransform ="translate("+ stuk8left +"%,"+ stuk8top +"%)";
     stuk8.style.WebkitTransform ="translate("+ stuk8left +"%,"+ stuk8top +"%)";
    
    stuk9.style.transform ="translate("+ stuk9left +"%,"+ stuk9top +"%)";
     stuk9.style.msTransform ="translate("+ stuk9left +"%,"+ stuk9top +"%)";;
     stuk9.style.WebkitTransform ="translate("+ stuk9left +"%,"+ stuk9top +"%)";
    
    stuk10.style.transform ="translate("+ stuk10left +"%,"+ stuk10top +"%)";
     stuk10.style.msTransform ="translate("+ stuk10left +"%,"+ stuk10top +"%)";
     stuk10.style.WebkitTransform ="translate("+ stuk10left +"%,"+ stuk10top +"%)";
    
    stuk11.style.transform ="translate("+ stuk11left +"%,"+ stuk11top +"%)";
     stuk11.style.msTransform ="translate("+ stuk11left +"%,"+ stuk11top +"%)";
     stuk11.style.WebkitTransform ="translate("+ stuk11left +"%,"+ stuk11top +"%)";
    
    stuk12.style.transform ="translate("+ stuk12left +"%,"+ stuk12top +"%)";
     stuk12.style.msTransform ="translate("+ stuk12left +"%,"+ stuk12top +"%)";
     stuk12.style.WebkitTransform ="translate("+ stuk12left +"%,"+ stuk12top +"%)";
    
    stuk13.style.transform ="translate("+ stuk13left +"%,"+ stuk13top +"%)";
     stuk13.style.msTransform ="translate("+ stuk13left +"%,"+ stuk13top +"%)";
     stuk13.style.WebkitTransform ="translate("+ stuk13left +"%,"+ stuk13top +"%)";
    
    stuk14.style.transform ="translate("+ stuk14left +"%,"+ stuk14top +"%)";
     stuk14.style.msTransform ="translate("+ stuk14left +"%,"+ stuk14top +"%)";
     stuk14.style.WebkitTransform ="translate("+ stuk14left +"%,"+ stuk14top +"%)";
    
       stuk1.style.opacity = stuk1opacity;
       stuk2.style.opacity = stuk2opacity;
       stuk3.style.opacity = stuk3opacity;
       stuk4.style.opacity = stuk4opacity;
       stuk5.style.opacity = stuk5opacity;
       stuk6.style.opacity = stuk6opacity;
       stuk7.style.opacity = stuk7opacity;
       stuk8.style.opacity = stuk8opacity;
       stuk9.style.opacity = stuk9opacity;
     stuk10.style.opacity = stuk10opacity;
     stuk11.style.opacity = stuk11opacity;
     stuk12.style.opacity = stuk12opacity;
     stuk13.style.opacity = stuk13opacity;
     stuk14.style.opacity = stuk14opacity;
    
     /*stuk1.style.top = stuk1top + '%';
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
    */

}


function mobileAndTabletcheck(){

  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  console.log('got down here');
  return check;
}

if(mobileAndTabletcheck()){
    window.addEventListener('scroll', function(){ // on page scroll
        requestAnimationFrame(parallaxcube); // call parallaxcube() on next available screen paint
    }, false);
}