'use strict';

/* Services */

angular.module('gephiPluginsFront.directives', [])
  
  .directive('navbar', [function(){
    return {
      restrict: 'E'
    , templateUrl: 'partials/navbar.html'
    }
  }])

  .directive('infopoint', [function(){
    return {
      restrict: 'E'
    , scope: {
        title: '='
      , template: '='
      }
    , templateUrl: 'partials/infopoint.html'
    , link: function(scope, el, attrs) {
        
      }
    }
  }])