(function() {
  'use strict';

  angular.module('starter.directives')
    .directive('hideTabs', hideTabs);

  hideTabs.$inject = ['$rootScope'];
  function hideTabs($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function() {
          console.log('beforeEnter');
          scope.$watch(attributes.hideTabs, function(value){
            console.log('watch');
            $rootScope.hideTabs = value;
          });
        });

        scope.$on('$ionicView.beforeLeave', function() {
          console.log('beforeLeave');
          $rootScope.hideTabs = false;
        });

        scope.$on('$ionicView.loaded', function() {
          console.log('loaded');
        });

        scope.$on('$ionicView.enter', function() {
          console.log('enter');
        });

        scope.$on('$ionicView.leave', function() {
          console.log('leave');
        });

        scope.$on('$ionicView.afterEnter', function() {
          console.log('afterEnter');
        });

        scope.$on('$ionicView.afterLeave', function() {
          console.log('afterLeave');
        });

        scope.$on('$ionicView.unloaded', function() {
          console.log('unloaded');
        });
      }
    };
  }
})();