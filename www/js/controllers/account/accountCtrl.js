﻿(function() {
  'use strict';

  angular.module('starter.controllers')
    .controller('AccountCtrl', AccountCtrl);

  AccountCtrl.$inject = ['$scope'];
  function AccountCtrl($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }
})();