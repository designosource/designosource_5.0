$( document ).ready(function() {
	$(".uitlegtekst > div").hide();
	$(".ww1").show();

    $(".wwstap1").click(function() {
    	$(".uitlegtekst > div").slideUp();
    	$(".ww1").slideDown();
    });

    $(".wwstap2").click(function() {
    	$(".uitlegtekst > div").slideUp();
    	$(".ww2").slideDown();
    });

    $(".wwstap3").click(function() {
    	$(".uitlegtekst > div").slideUp();
    	$(".ww3").slideDown();
    });

    $(".wwstap4").click(function() {
    	$(".uitlegtekst > div").slideUp();
    	$(".ww4").slideDown();
    });

    $(".wwstap5").click(function() {
    	$(".uitlegtekst > div").slideUp();
    	$(".ww5").slideDown();
    });    
});