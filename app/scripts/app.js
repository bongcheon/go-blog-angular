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
.constant('buildconfig', (function () {

  /* global __BUILD_CONFIG__ */
  return __BUILD_CONFIG__;
}()))
.config(function (
  $locationProvider,
  apiProvider,
  buildconfig
) {

  $locationProvider
    .html5Mode(true)
    .hashPrefix('!');

  apiProvider.setBaseUrl(buildconfig.API_URL);

});
