'use strict';

angular.module('go.blog')
  .controller('article.view', function (
    $http,
    $window,
    $scope,
    $state,
    $log,
    $q,
    article
    ) {

    $scope.article = article;

  });
