(function() {
  'use strict';

  angular.module('starter.controllers')
    .controller('launchCtrl', launchCtrl);

  launchCtrl.$inject = ['$ionicModal', '$scope'];
  function launchCtrl($ionicModal, $scope) {
    var vm = this;
    vm.openSignupModal = openSignupModal;
    vm.closeSignupModal = closeSignupModal;

    $ionicModal.fromTemplateUrl('templates/signup.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    function openSignupModal() {
      console.log('modal show');
      $scope.modal.show();
    }

    function closeSignupModal() {
      $scope.modal.hide();
    }

    // $scope.$on('$destroy', function() {
    //   $scope.modal.remove();
    // });
  }
})();