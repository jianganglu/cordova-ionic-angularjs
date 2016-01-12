(function() {
  'use strict';

  angular.module('starter')
    .run(function($ionicPlatform, $translate) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          // cordova.plugins.Keyboard.disableScroll(true);

        }

        if (window.plugins && window.plugins.nativepagetransitions) {
          // then override any default you want
          window.plugins.nativepagetransitions.globalOptions.duration = 500;
          window.plugins.nativepagetransitions.globalOptions.iosdelay = 350;
          window.plugins.nativepagetransitions.globalOptions.androiddelay = 350;
          window.plugins.nativepagetransitions.globalOptions.winphonedelay = 350;
          window.plugins.nativepagetransitions.globalOptions.slowdownfactor = 4;
          // these are used for slide left/right only currently
          window.plugins.nativepagetransitions.globalOptions.fixedPixelsTop = 0;
          window.plugins.nativepagetransitions.globalOptions.fixedPixelsBottom = 0;
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
        
        if(window.plugins && window.plugins.umengAnalyticsPlugin) {
          //初始化友盟统计配置
          window.plugins.umengAnalyticsPlugin.init();
          //调试模式
          window.plugins.umengAnalyticsPlugin.setDebugMode(true);
        }

        //注意，这段代码是应用退出前保存统计数据，请在退出应用前调用
        //window.plugins.umengAnalyticsPlugin.onKillProcess();

        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    });
})();