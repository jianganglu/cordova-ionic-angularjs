(function() {
  angular.module('starter.apis')
    .factory('api', api);

  function api() {
    // 模拟开关
    var mock = true;
    
    // 真实数据开关
    if(!mock) {
      USER_PROFILE: '/users/{userCode}'
    }
    // 模拟数据开关
    else {
      USER_PROFILE: ''
    }
  }
})();