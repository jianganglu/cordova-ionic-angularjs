// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic','ionic.service.core',
  'starter.apis',
  'starter.services',
  'starter.controllers',
  'starter.utils',
  'starter.directives',
  'starter.filters',
  'pascalprecht.translate']);
angular.module('starter.apis', []);
angular.module('starter.services', []);
angular.module('starter.controllers', []);
angular.module('starter.utils', []);
angular.module('starter.directives', []);
angular.module('starter.filters', []);
