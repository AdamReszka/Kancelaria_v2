$(document).ready(initAll);

function initAll(){
  setHeight();
  startParallax();
  growBorder();
  adjustNav1();
  adjustNav2();
  adjustNav3();
  openFrames();
  closeFrames();
  setNumbers();
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
    $(this).closest('#sec3-description').find('.lfc-title').addClass('bigborder');
  });
  $('.growing').mouseleave(function(){
    $(this).closest('#sec2-about').find('#header-title').removeClass('bigborder');
    $(this).closest('#sec3-description').find('.lfc-title').removeClass('bigborder');
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

function adjustNav3() {
    var NavY3 = $('#sec4-team').offset().top;
    var stickyNav = function(){
    var scrollY = $(window).scrollTop();
    if (scrollY >= NavY3) {
      $('nav').addClass('nav-darken');
      $('#main-ul a').addClass('nav-darken');
    }
      		};
    stickyNav();
    $(window).scroll(function() {
    	stickyNav();
    });
    }

function openFrames(){
  $('#slide-left-arrow').click(function(){
    $(this).closest('.right-frame').css('width','135rem');
    $(this).closest('.frames-box').find('#slide-right-arrow').show(1000);
    $(this).closest('.frames-box').find('.left-frame-content').css('width','0');
    $(this).hide(1000);
  });
}
function closeFrames(){
  $('#slide-right-arrow').click(function(){
    $(this).closest('.frames-box').find('.right-frame').css('width','54rem');
    $(this).closest('.frames-box').find('#slide-left-arrow').show(1000);
    $(this).closest('.frames-box').find('.left-frame-content').css('width','81rem');
    $(this).hide(1000);
  });
}
function setNumbers() {

  var eventFired = false;
  objectPositionTop = $('#numberTag').offset().top - $(window).height();
  $(window).on('scroll', function() {
    var currentPosition = $(document).scrollTop();
    if (currentPosition > objectPositionTop && eventFired === false) {
      eventFired = true;
      $('.timer').countTo();
    }
  });
}
