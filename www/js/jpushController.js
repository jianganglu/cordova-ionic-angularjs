(function() {
  'use strict';

  angular.module('starter.controllers')
    .controller('jpushCtrl', jpushCtrl);

  function jpushCtrl() {
    var vm = this;
    vm.push = push;
    vm.isChecked = true;

    function push() {
      if(window.plugins && window.plugins.jPushPlugin) {
        if(vm.isChecked) {
          window.plugins.jPushPlugin.resumePush();
        }else {
          window.plugins.jPushPlugin.stopPush();
        }
      }
    }
  }
})();