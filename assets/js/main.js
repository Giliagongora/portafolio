$(document).ready(function(){ 

	$(".iconBtn").click(function(e){
		e.preventDefault();
		$(".top-mobile ul").toggle(500);

	});
	if(!$(".iconBtn,.top-mobile ul")){
		e.preventDefault();
		$('.top-mobile ul').hide();

	};
    $(window).scroll(function(){                          
        if ($(this).scrollTop()) {
            $('.top-mobile ul').fadeOut();
        }
    });



});