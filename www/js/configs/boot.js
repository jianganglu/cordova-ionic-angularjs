(function() {
  'use strict';

  angular.module('starter')
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }

        // if(navigator.globalization) {
        //   navigator.globalization.getPreferredLanguage(successCallback, errorCallback);

        //   function successCallback(language) {
        //     alert('language:' + language.value + '\n');
        //   }

        //   function errorCallback() {
        //     alert('Error getting language\n');
        //   }
        // }

        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    });
})();