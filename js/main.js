$(document).ready(initAll);

function initAll(){
  setHeight();
  startParallax();
  growBorder();
  adjustNav1();
  adjustNav2();
}

function setHeight(){
  $('#sec1-main-cont').height($(window).innerHeight());
}

function startParallax(){
  $(window).stellar();
}

function growBorder(){
  $('.growing').hover(function(){
    console.log('jest nad');
    $(this).closest('#sec2-about').find('#header-title').addClass('bigborder');
  });
  $('.growing').mouseleave(function(){
    $(this).closest('#sec2-about').find('#header-title').removeClass('bigborder');
  });
}

function adjustNav1() {
	var NavY1 = $('#sec2-about').offset().top;
	var stickyNav = function(){
	var scrollY = $(window).scrollTop();
	if (scrollY >= NavY1) {
		$('nav').addClass('nav-darken');
		$('#main-ul a').addClass('nav-darken');
	} else {
    $('nav').removeClass('nav-darken');
		$('#main-ul a').removeClass('nav-darken');

				}

				};
	stickyNav();
	$(window).scroll(function() {
		stickyNav();
	});
	}
  function adjustNav2() {
  	var NavY2 = $('#sec3-description').offset().top;
  	var stickyNav = function(){
  	var scrollY = $(window).scrollTop();
  	if (scrollY >= NavY2) {
  		$('nav').removeClass('nav-darken');
  		$('#main-ul a').removeClass('nav-darken');
  	}
  				};
  	stickyNav();
  	$(window).scroll(function() {
  		stickyNav();
  	});
  	}
