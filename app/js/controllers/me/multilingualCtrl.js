﻿(function() {
  'use strict';

  angular.module('starter.controllers')
    .controller('multilingualCtrl', multilingualCtrl);

  multilingualCtrl.$inject = ['$translate', '$localStorage']
  function multilingualCtrl($translate, $localStorage) {

    var vm = this;
    // vm.cur_lang = $localStorage.getLangStore();
    vm.cur_lang = $localStorage.getLang();
    vm.switching = switching;

    function switching() {
      $translate.use(vm.cur_lang);
      $localStorage.storeLang(vm.cur_lang);
      // $localStorage.storeLang(vm.cur_lang);
    }
  }
})();