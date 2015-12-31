(function() {
  'use strict';

  angular.module('starter.services')
    .factory('httpInterceptor', httpInterceptor);

  httpInterceptor.$inject = ['$q', '$injector'];
  //拦截器
  function httpInterceptor($q, $injector) {
    var httpInterceptor = {
      request       : request,
      response      : response,
      requestError  : requestError,
      responseError : responseError
    };

    function request(config) {
      config.timeout = 12000;
      var $ionicLoading = $injector.get('$ionicLoading');
      if (config.headers) {
        if (localStorage.getItem("token")) {
          config.headers.tokenId = localStorage.getItem("token");
        }
        if (localStorage.getItem("lang")) {
          config.headers.lang = localStorage.getItem("lang");
        }
        if (localStorage.getItem("PersonalNetCode")) {
          config.headers.entCode = localStorage.getItem("PersonalNetCode");
        }
      }
      if(config.cache || config.url.indexOf('i18n') > 0){
        return config || $q.when(config);
      }else{
        $ionicLoading.show();
        return config || $q.when(config);
      }

      return config;
    }

    function response(config) {
      config.timeout = 12000;
      var $ionicLoading = $injector.get('$ionicLoading');
      if (config.headers) {
        if (localStorage.getItem("token")) {
          config.headers.tokenId = localStorage.getItem("token");
        }
        if (localStorage.getItem("lang")) {
          config.headers.lang = localStorage.getItem("lang");
        }
        if (localStorage.getItem("PersonalNetCode")) {
          config.headers.entCode = localStorage.getItem("PersonalNetCode");
        }
      }
       
      return config;
    }

    function requestError() {

    }

    function responseError(config) {
      // var $cordovaDialogs = $injector.get('$cordovaDialogs');
      // var $ionicLoading = $injector.get('$ionicLoading');
      // var $state = $injector.get('$state');
      // var utilSrv = $injector.get('utilSrv');
      // $ionicLoading.hide();
      // if (config.status == 0) {
      //   $cordovaDialogs.alert(utilSrv.instant('common.VALIDATE38'),utilSrv.instant('common.NOTICE'),utilSrv.instant('common.CONFIRM'));
      // }
      // if (config.status == 403 || config.status == 400 || config.status == 405) {
      //   $cordovaDialogs.alert(utilSrv.instant('common.VALIDATE39'),utilSrv.instant('common.NOTICE'),utilSrv.instant('common.CONFIRM'));
      // }
      // if (config.status == 401){
      //   $cordovaDialogs.alert(utilSrv.instant('common.VALIDATE40'), utilSrv.instant('common.NOTICE'),utilSrv.instant('common.CONFIRM')).then(function() {
      //       utilSrv.clearAllDataAndCache();
      //       $state.go('app.signin');
      //     });
      // }
      // return $q.reject(config);
      return config;
    }

    return httpInterceptor;
  };
})();