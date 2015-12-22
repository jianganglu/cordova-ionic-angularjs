(function() {
  'use strict';

  angular.module('starter.directives')
    .directive('hideTabs', hideTabs)
    .directive('hello', hello);

  hideTabs.$inject = ['$rootScope'];
  function hideTabs($rootScope) {
    console.log(11);
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function() {
          scope.$watch(attributes.hideTabs, function(value){
              $rootScope.hideTabs = value;
          });
        });

        scope.$on('$ionicView.beforeLeave', function() {
          $rootScope.hideTabs = false;
        });
      }
    };
  }

  function hello() {
    return {
      restrict: 'EA',
      template: '<div>hello</div>'
    }
  }
})();