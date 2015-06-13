'use strict';

angular.module('go.blog')
.controller('admin', function (
  $http,
  $window,
  $scope,
  $state,
  $log,
  $q,
  api,
  articles,
  SUPPORTED_TYPES
) {

  $scope.articles = articles;
  $scope.type = {
    current: 'Text',
    supported: SUPPORTED_TYPES
  };

  $scope.createArticle = function() {
    api.post('articles', {
      subject: '',
      body: '',
      type: $scope.type.current
    }).then( function(data) {
      console.log(data);
      $state.go('main.article.edit', {article:data.id});
    }, function(res) {
      console.log(res);
    });
  };

  $scope.deleteArticle = function(idx) {
    api.del('articles/' + $scope.articles[idx]._id).then( function() {
      $scope.articles.splice(idx, 1); //TODO
    }, function(res) {
      console.log(res);
    });
  };

});
