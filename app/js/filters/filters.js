(function() {
  'use strict';

  angular.module('starter.filters')
    .filter('filters', filters);
    // .filter('translate', translate);

  function filters() {
    
  }

  // translate.$inject = ['$translate'];
  // function translate($translate) {
  //   return function(key) {
  //     if(key) {
  //       return $translate.instant(key);
  //     }
  //   }
  // }
})();
(function() {
  'use strict';

  angular.module('starter.filters')
    .filter('avatar', avatar);

  /**
   * avatar 用于处理姓名过滤器
   * 用法： {{ username | avatar}}
   */
  function avatar() {
    return function(input) {
      input = input || '';
      var output = '',
          inputLen = input.length,
          inputChat = ''; // 单个字符

      if(isChinese(input)) {
        output = input.substring(inputLen - 2, inputLen);
      }else {
        // 处理英文字符串，大写字母个数大于等于2个取，大写字母，否则取前面两位并转成大写。
        for(var i = 0; i < inputLen; i++) {
          inputChat = input[i];

          if(inputChat >= 'A' && inputChat <= 'Z') {
            output += inputChat;
          }
        }

        if(output.length >= 2) {
          output = output.substring(0, 2);
        }else {
          output = input.substring(0, 2).toUpperCase();
        }
      }

      function isChinese(input) {  
        var re=/[^\u4e00-\u9fa5]/;
        return re.test(input) ? false : true;
      }

      return output;
    }
  }
})();