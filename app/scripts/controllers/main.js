'use strict';

/**
 * @ngdoc function
 * @name goBlogClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goBlogClientApp
 */
angular.module('goBlogClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
