(function() {
  'use strict';

  angular.module('starter.controllers')
    .controller('settingsCtrl', settingsCtrl);

  settingsCtrl.$inject = ['$localStorage'];
  function settingsCtrl($localStorage) {
    var vm = this;
    console.log('settingsCtrl');
  }
})();