(function() {
  'use strict';

  angular.module('starter.utils')
    .factory('$localStorage', $localStorage);

  $localStorage.$inject = ['$window'];
  function $localStorage($window) {
    var $localStorage = {
      setItem: setItem,
      getItem: getItem,
      setObj: setObj,
      getObj: getObj,
      removeItem: removeItem,

      storeLang: storeLang,
      getLang: getLang
    };

    function setItem(key, value){
      localStorage.setItem(key, value);
    }

    function getItem(key){
      return localStorage.getItem(key);
    }

    function setObj(key, obj){
      $window.localStorage[key] = JSON.stringify(obj);
    }

    function getObj(key){
      return JSON.parse($window.localStorage[key] || '{}');
    }

    function removeItem(key){
      localStorage.removeItem(key);
    }

    function storeLang(value) {
      this.setItem('lang', value);
    }

    function getLang() {
      return this.getItem('lang');
    }

    return $localStorage
  };
})();