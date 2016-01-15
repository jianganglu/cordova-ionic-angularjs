(function() {
  'use strict';

  angular.module('starter.controllers')
    .controller('ChatDetailCtrl', ChatDetailCtrl);

  ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats', 'mainService'];
  function ChatDetailCtrl($scope, $stateParams, Chats, mainService) {
    $scope.chat = Chats.get($stateParams.chatId);

    init();
    function init() {
      mainService.getInitData();
    }
  }
})();