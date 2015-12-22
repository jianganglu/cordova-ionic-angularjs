(function() {
  'use strict';

  angular.module('starter.controllers')
    .controller('multilingualCtrl', multilingualCtrl);

  function multilingualCtrl() {
    var vm = this;
    vm.choice = 'A';
  }
})();