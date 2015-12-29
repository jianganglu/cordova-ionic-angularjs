(function() {
  'use strict';

  angular.module('starter.apis')
    .factory('userApi', userApi);

  userApi.$inject = ['$http', 'api'];
  function userApi($http, api) {
    var userApi = {
      getInitData : getInitData
    };

    function getInitData() {
      return $http.get(api.GET_USER_INIT_DATA);
    }

    return userApi;
  }
})();