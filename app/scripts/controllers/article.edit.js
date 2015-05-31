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
  article
) {

  $scope.article = article;

  $scope.update = function(updated) {
    api.put('articles/' + updated.id, updated).then(function (data) {
      $state.go('^.view');
    });
  };

});
