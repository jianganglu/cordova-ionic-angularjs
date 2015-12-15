(function() {
  'use strict';

  angular.module('starter.controllers')
    .controller('userController', userController);

  userController.$inject = ['userService'];
  function userController(userService) {
    var vm = this;
    
  }
})();