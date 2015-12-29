(function() {
  angular.module('starter.apis')
    .factory('api', api);

  function api() {
    // 模拟开关
    var mock = true;

    api.ROOT_URL = 'http://localhost:8080/api/mobile';
    
    // 真实数据开关
    if(!mock) {
      return {
        USER_PROFILE: api.ROOT_URL + '/users/{userCode}',
        // GET 获取用户初始化数据
        GET_USER_INIT_DATA: api.ROOT_URL + '/users/UI1450663665270100'
      }
    }
    // 模拟数据开关
    else {
      return {
        USER_PROFILE: '',
        // GET 获取用户初始化数据
        GET_USER_INIT_DATA: api.ROOT_URL + '/users/UI1450663665270100'
      }
    }
  }
})();