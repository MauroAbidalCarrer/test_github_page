// JavaScript Document

$(document).ready(function() {

    // Gestion Apparition Menu Mobile	
	$('#index span').click(function(){
		$('#textes').toggleClass('open');
		$('#index span').toggleClass('hide');
		$('#textes li a').removeClass('active');
		$('.texte').removeClass('actif');
	});
	$('#textes li a').click(function(){
		$('#textes li a').removeClass('active');
		$('.texte').removeClass('actif');
        var page = $(this).attr('href');
		$(page).addClass('actif');
        $(this).addClass('active');
	});

    $(window).scroll(function () {
		var st = $(this).scrollTop();		
		if (st >= 100) {
			$('#index i').css('opacity','0');
		} else {
			$('#index i').css('opacity','1');
		}	
	});

});