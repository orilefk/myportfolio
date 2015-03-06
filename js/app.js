$(document).ready(function(){


//	Program to allow slow scrolling from menu items
	var aboutTopPosition = $('.aboutpage').offset().top;
	var projectsTopPosition = $('.projectspage').offset().top;
	var contactTopPosition = $('.social').offset().top;
	var homeTopPosition = $('.introduction').offset().top;

	$('#about').click(function(){
		$('html, body').animate({scrollTop:aboutTopPosition}, 'slow');
		return false;
	});
	$('#projects').click(function(){
		$('html, body').animate({scrollTop:projectsTopPosition}, 'slow');
		return false;
	});
	$('#contact').click(function(){
		$('html, body').animate({scrollTop:contactTopPosition}, 'slow');
		return false;
	});
	$('.logo').click(function(){
		$('html, body').animate({scrollTop:homeTopPosition}, 'slow');
		return false;
	});


});