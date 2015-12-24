﻿(function() {
  'use strict';

  angular.module('starter')
    .run(function($ionicPlatform, $translate) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }

        // if(!window.localStorage.lang) {
        //   if(navigator.globalization) {
        //     navigator.globalization.getPreferredLanguage(successCallback, errorCallback);

        //     function successCallback(language) {
        //       alert('language:' + language.value + '\n');
        //       $translate.use(language.value);
        //       // $translateProvider.preferredLanguage(language.value);
        //     }

        //     function errorCallback() {
        //       alert('Error getting language\n');
        //     }
        //   }
        // }

        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    });
})();