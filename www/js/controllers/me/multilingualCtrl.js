(function() {
  'use strict';

  angular.module('starter.controllers')
    .controller('multilingualCtrl', multilingualCtrl);

  function multilingualCtrl($scope, $rootScope) {

    $scope.$on('$ionicView.beforeEnter', function(e) {
        $rootScope.hideTabs = true;
    })

    var vm = this;
    vm.choice = 'A';
  }
})();