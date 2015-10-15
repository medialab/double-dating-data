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
  console.log(navigator.userAgent.toLowerCase())
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

    var open = false
    
    $('.infopoint-container').each( function(i, e) {

      var container = $(e)
 
      if ( container.length > 0 ) {

        var scrollToTop = container.offset().top - $( window ).scrollTop()
          , scrollPercent = 100 * scrollToTop / $( window ).height()
        
        if ( scrollToTop < 100 ) {
        
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
