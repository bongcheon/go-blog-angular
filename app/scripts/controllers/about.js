'use strict';

/**
 * @ngdoc function
 * @name goBlogClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the goBlogClientApp
 */
angular.module('goBlogClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
