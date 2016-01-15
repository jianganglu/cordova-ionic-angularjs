(function() {
  'use strict';

  angular.module('starter.controllers')
    .controller('DashCtrl', DashCtrl);

  DashCtrl.$inject = ['$scope', '$translate', 'navigationService'];
  function DashCtrl($scope, $translate, navigationService) {
    $scope.switching = function(lang){
        $translate.use(lang);
        window.localStorage.lang = lang;
        window.location.reload();
    };

    $scope.slide = function() {
      console.log(11);
      navigationService.goNative('tab.chat-detail', {
        chatId: 1
      });
    }

    $scope.cur_lang = $translate.use();
  }

})();