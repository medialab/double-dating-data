'use strict';

angular.module('gephiPluginsFront.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html'
  , controller: 'HomeController'
  })
}])

.controller('HomeController', function($scope, $location) {

  // Chrome-specific test
  var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

  if (is_chrome) {
    $('.letter')
      .css('color', 'transparent')
      .css('background', 'url("img/fuller_crop_a.jpg") repeat')
      .css('-webkit-background-size', 'cover')
      .css('-webkit-background-clip', 'text')

    $('.letter.variant_a')
      .css('background', 'url("img/fuller_crop_a.jpg") repeat')
    $('.letter.variant_b')
      .css('background', 'url("img/fuller_crop_b.jpg") repeat')
    $('.letter.variant_c')
      .css('background', 'url("img/fuller_crop_c.jpg") repeat')
    $('.letter.variant_d')
      .css('background', 'url("img/fuller_crop_d.jpg") repeat')
    $('.letter.variant_e')
      .css('background', 'url("img/fuller_crop_e.jpg") repeat')
  }

  $( window ).scroll(function() {

    // Display floating info

    var opacity = 0
      , text = $('.floatingInfo').html()

    $('.transition-image').each( function(i, e) {

      var container = $(e)
 
      if ( container.length > 0 ) {

        var scrollToTop = container.offset().top - $( window ).scrollTop()
          , source = -0.2 * container.height()
          , target = 200 - container.height()
          , percent = ( scrollToTop - source ) / ( target - source )
        
        if ( scrollToTop < source && scrollToTop > target ) {

          opacity = Math.max(opacity, 1)
          
          if ( container.hasClass('transition-to-part1') ) {
            text = 'Du Mexique à Los Angeles,<br>trajet suggéré<br>par Google Maps'
          }

          if ( container.hasClass('transition-to-part2') ) {
            text = 'Scénarios d\'évolution<br>de la température globale<br>en fonction des émissions<br>de CO2'
          }

          if ( container.hasClass('transition-to-part3') ) {
            text = 'L\'ours polaire,<br>icône populaire<br>du réchauffement climatique'
          }

        }
      }

    })

    $('.floatingInfo')
      .css('opacity', opacity)
      .html(text)


    // Unfold text

    var open = false
    
    $('.infopoint-container').each( function(i, e) {

      var container = $(e)
 
      if ( container.length > 0 ) {

        var scrollToTop = container.offset().top - $( window ).scrollTop()
          , scrollPercent = 100 * scrollToTop / $( window ).height()
        
        if ( scrollToTop < 10 ) {
        
          container
            .addClass('past')
            .removeClass('present')
            .removeClass('future')
        
        } else if ( !open && scrollToTop < 300 ) {

          container
            .removeClass('past')
            .addClass('present')
            .removeClass('future')

          open = container

        } else {

          container
            .removeClass('past')
            .removeClass('present')
            .addClass('future')

        }

      }
      
    })
    
  })
});
