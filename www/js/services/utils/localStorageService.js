(function() {
  'use strict';

  angular.module('starter.utils')
    .factory('$localStorage', $localStorage);

  $localStorage.$inject = ['$window'];
  function $localStorage($window) {
    var $localStorage = {
      setItem: setItem,
      getItem: getItem,
      removeItem: removeItem,

      storeLang: storeLang,
      getLangStore: getLangStore
    };

    function setItem(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

    function getItem(key) {
      return JSON.parse(localStorage.getItem(key) || null);
    }

    function removeItem(key) {
      localStorage.removeItem(key);
    }

    function storeLang(value) {
      this.setItem('lang', value);
    }

    function getLangStore() {
      return this.getItem('lang');
    }

    return $localStorage;
  };
})();