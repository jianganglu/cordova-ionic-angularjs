(function() {
  'use strict';

  angular.module('starter')
    .config(['$ionicConfigProvider', '$translateProvider', function($ionicConfigProvider, $translateProvider) {

      var lang = window.localStorage.lang || 'zh-CN';
      $translateProvider.preferredLanguage(lang);
      $translateProvider.useStaticFilesLoader({
        prefix: '/i18n/',
        suffix: '.json'
      });
    }]);
})();