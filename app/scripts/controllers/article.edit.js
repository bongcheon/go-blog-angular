'use strict';

angular.module('go.blog')
.controller('article.edit', function (
  $http,
  $window,
  $scope,
  $state,
  $log,
  $q,
  api,
  article,
  SUPPORTED_TYPES
) {

  $scope.article = article;
  $scope.type = {
    supported: SUPPORTED_TYPES
  };

  $scope.update = function(updated) {
    api.put('articles/' + updated.id, updated).then(function () {
      $state.go('^.view');
    });
  };

});
