'use strict';

angular
.module('go.blog', [
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'ui.bootstrap',
])
.config(function ($locationProvider) {

  $locationProvider
    .html5Mode(true)
    .hashPrefix('!');

});
