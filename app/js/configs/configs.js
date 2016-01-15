(function() {
  'use strict';

  angular.module('starter')
    .config(['$ionicConfigProvider', '$translateProvider', '$httpProvider',
      function($ionicConfigProvider, $translateProvider, $httpProvider) {

      // Native Scrolling
      if(!ionic.Platform.isIOS()) {
        $ionicConfigProvider.scrolling.jsScrolling(false);
      }

      $translateProvider.useStaticFilesLoader({
        prefix: './i18n/',
        suffix: '.json'
      });

      $translateProvider.registerAvailableLanguageKeys(['en-US', 'zh-CN'], {
          'en_US': 'en-US',
          'zh_CN': 'zh-CN'
      });
      
      if(localStorage.getItem('lang') === null) {
        //auto determine preferred lang
        $translateProvider.determinePreferredLanguage();
      }else {
        //set preferred lang
        $translateProvider.preferredLanguage(localStorage.getItem('lang'));
      }
      //when can not determine lang, choose en lang.
      $translateProvider.fallbackLanguage('zh-CN');

      $ionicConfigProvider.views.transition('none');
      $ionicConfigProvider.tabs.style('standard').position('bottom');

      //ionic interceptors
      $httpProvider.interceptors.push('httpInterceptor');
    }]);
})();