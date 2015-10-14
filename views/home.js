'use strict';

angular.module('gephiPluginsFront.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html'
  , controller: 'HomeController'
  })
}])

.controller('HomeController', function($scope, $location) {
  $( window ).scroll(function() {

    var open = false
    
    $('.infopoint-container').each( function(i, e) {

      var container = $(e)
 
      if ( container.length > 0 ) {

        var scrollToTop = container.offset().top - $( 'body' ).scrollTop()
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
