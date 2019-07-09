$(document).ready(function(){ 

	$(".iconBtn").click(function(e){
		e.preventDefault();
		$(".top-mobile ul").toggle(500);

	});
	if(!$(".iconBtn,.top-mobile ul")){
		e.preventDefault();
		$('.top-mobile ul').hide();

	};
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