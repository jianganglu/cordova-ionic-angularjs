(function() {
  'use strict';

  angular.module('starter.services')
    .factory('mainService', mainService);

  mainService.$inject = ['userApi'];
  function mainService(userApi) {
    var mainService = {
      getInitData : getInitData
    };

    function getInitData() {
      return userApi.getInitData();
    }

    return mainService;
  }

})();