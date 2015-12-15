(function() {
  'use strict';

  angular.module('starter.services')
    .factory('userService', userService);

  function userService() {
    var user = {
      username: 'Jiangang Lu'
    };
    var userService = {};

    function getUser() {
      return user;
    }

    return userService;
  }
})();