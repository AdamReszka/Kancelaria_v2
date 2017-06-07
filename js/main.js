$(document).ready(initAll);

function initAll(){
  setHeight();
  startParallax();
  growBorder();
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
