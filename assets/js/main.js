/*Menu top mobile*/


/*$(".iconBtn").click(function(e){
	e.preventDefault();
	$(".top-mobile ul").show();
	$(".top-mobile ul").hide();

});*/

$(document).ready(function(){ 

	$(".iconBtn").click(function(e){
		e.preventDefault();
		$(".top-mobile ul").slideToggle(700);

	});
/*	$(!$(".top-mobile ul")).blur(function(){
		$(this).hide();
	})*/
/*	$(!$(".top-mobile ul li")).blur(function(){
		$(this).hide();
	});*/

    $(window).scroll(function(){                          
        if ($(this).scrollTop()) {
            $('.top-mobile ul').fadeOut();
        }
    });



});