$(document).ready(function(){

  // Funzione per precaricare le immagini
  // Helper function, used below.
  Array.prototype.remove = function(element) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == element) { this.splice(i,1); }
    }
  };

  // Usage: $(['img1.jpg','img2.jpg']).preloadImages(function(){ ... });
  // Callback function gets called after all images are preloaded
  $.fn.preloadImages = function(callback) {
    checklist = this.toArray();
    this.each(function() {
      $('<img>').attr({ src: this }).load(function() {
        checklist.remove($(this).attr('src'));
        if (checklist.length == 0) { callback(); }
      });
    });
  };

  /*$('img').preloadImages(function(){
    // Update page with response data
    $('#preloader').hide();
  });*/

  // CountUp.js commons
  var easingFn = function (t, b, c, d) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }
  var options = {
    useEasing : true,
    easingFn: easingFn,
    useGrouping : true,
    separator : '.',
    decimal : ',',
    prefix : '',
    suffix : ''
  };

  // Solo sui browser decenti
  /*if(Modernizr.csstransforms3d) {

    // ScrollReveal.js
    window.sr = ScrollReveal();
    sr.reveal('.reveal', { delay: 0, duration: 200, scale: 1, viewOffset  : { top: 200 } });

    // Reveal sul titolo, in sequenza
    sr.reveal('.title-el', { delay: 0, scale: 4 }, 400);

    // Reveal sui box con gli oggetti
    sr.reveal('.doppia-el', { delay: 0, scale: 1 });

    // Reveal sui numeri che si animano, con callback una funzione di CountUp
    sr.reveal('.speedcount', {
      delay: 0,
      afterReveal : function(domEl) {
        if ($(domEl).data('countup') > 999) {
          var decimals = 0;
        } else if ($(domEl).data('countup') > 0.2) {
          var decimals = 2;
        } else {
          var decimals = 7;
        }
        var countup;
        countup = new CountUp($(domEl).children('h1').attr('id'), 0, $(domEl).data('countup'), decimals, 2.5, options);
        countup.start();
      },
    });

    sr.reveal('.speedcount-ronaldi', {
      delay: 0,
      scale: 1,
      afterReveal : function(domEl) {
        var countup;
        countup = new CountUp($(domEl).children('span').attr('id'), 0, $(domEl).data('countup'), 2, 2.5, options);
        countup.start();
      },
    });
  }*/

  // Slick

  $('.slideshow').slick({
    //setting-name: setting-value
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  // Immagini di prodotto
  setInterval('cycleImages()', 3000);

  // Headroom nasconde l'header mentre si scrolla
  $('#header').headroom({
    "offset": 205,
    "tolerance": 5,
    "classes": {
      "initial": "animated",
      "pinned": "slideDown",
      "unpinned": "slideUp"
    }
  });

  // Unveil.js sulle immagini dei box
  $(".doppia img").unveil(800, function() {
    $(this).load(function() {
      this.style.opacity = 1;
    });
  });

});

// Bottone scroll

//this is where we apply opacity to the arrow
$(window).scroll( function(){
  //get scroll position
  var topWindow = $(window).scrollTop();
  //multipl by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow * 1.5;

  //get height of window
  var windowHeight = $(window).height();

  //set position as percentage of how far the user has scrolled
  var position = topWindow / windowHeight;
  //invert the percentage
  position = 1 - position;

  //define arrow opacity as based on how far up the page the user has scrolled
  //no scrolling = 1, half-way up the page = 0
  $('.arrow-wrap').css('opacity', position);

});

//Code stolen from css-tricks for smooth scrolling:
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Funzione per far girare le immagini
function cycleImages(){
  var $active = $('#mercurial-slideshow .active');
  var $next = ($active.next().length > 0) ? $active.next() : $('#mercurial-slideshow img:first');
  $next.css('z-index',2);//move the next image up the pile
  $active.fadeOut(1500,function(){//fade out the top image
    $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
    $next.css('z-index',3).addClass('active');//make the next image the top one
  });
}
