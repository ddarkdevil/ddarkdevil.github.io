$(document).ready(function() {
    
    
    /* STICKY NAVIGATION */
    $('.js--section-header').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    
    /* CALL ACTION FOR BUTTONS */
    $('.js--button-action-1').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-price').offset().top}, 750)
    });
    
    $('.js--button-action-2').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-header').offset().top}, 750)
    });
    
    
    
    /* CALL ACTION FOR BUTTONS NAVIGATION BAR */
     $('.js--nav-action-1').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-header').offset().top -20}, 750)
    });
    
     $('.js--nav-action-2').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-steps').offset().top -20}, 750)
    });
    
      $('.js--nav-action-3').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top -100}, 750)
    });
    
      $('.js--nav-action-4').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-price').offset().top -20}, 750)
    });
    
    
    
    /* ANIMATIONS ON SCROLL */
    $('.js--header-animation').waypoint(function(direction) {
        $('.js--header-animation').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--iphone-animation').waypoint(function(direction) {
        $('.js--iphone-animation').addClass('animated slideInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--premium-animation').waypoint(function(direction) {
        $('.js--premium-animation').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    
    /* MOBILE NAVIGATION BAR */
    $('.js--mobile-nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav-icon i');
        nav.slideToggle(250);
        
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    
    /* MAPS */
    var map = new GMaps({
      div: '.map', 
      lat: 13.352176,
      lng: 74.803585
    });
    
    map.addMarker({
      lat: 13.352176,
      lng: 74.793585,
      title: 'Manipal',
      infoWindow: {
          content: '<p>Home</p>'
      }
  });
    
});

    