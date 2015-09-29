'use strict';

/* Services */

angular.module('gephiPluginsFront.directives', [])
  
  .directive('navbar', [function(){
    return {
      restrict: 'E'
    , templateUrl: 'partials/navbar.html'
    }
  }])