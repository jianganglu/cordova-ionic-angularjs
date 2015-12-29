(function() {
  'use strict';

  angular.module('starter.services')
    .factory('navigationService', navigationService);

  navigationService.$inject = ['$state'];
  function navigationService($state) {
    var navigationService = {
      goNative : goNative
    };
    //directly binding events to this context
    function goNative(view, data, direction) {
      $state.go(view, data);
      window.plugins.nativepagetransitions.slide({
          "direction": direction
        },
        function(msg) {
          console.log("success: " + msg)
        }, // called when the animation has finished
        function(msg) {
          alert("error: " + msg)
        } // called in case you pass in weird values
      );
    };

    return navigationService;
  }
})();