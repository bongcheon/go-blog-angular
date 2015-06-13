'use strict';

angular.module('go.blog')
.controller('home', function (
  $http,
  $window,
  $scope,
  $state,
  $log,
  $q,
  api,
  articles
) {

  $scope.articles = articles;

});
