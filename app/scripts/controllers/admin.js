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
  $scope.article = {
    type: {
      selected: 'Text',
      supported: SUPPORTED_TYPES
    },
    subject: '',
    slug: {
      input: '',
      autogenerate: true
    }
  };

  $scope.onChangeSubject = function() {
    if ($scope.article.slug.autogenerate) {
      var slug = $scope.article.subject;

      if (slug && slug.length > 0) {
        // to lower cases
        slug = slug.toLowerCase();

        // whitespaces to dash
        slug = slug.replace(/\s+/g, '-');

        // only alphanumerics are permitted
        slug = slug.replace(/[^a-z0-9-]+/, '');
      }

      $scope.article.slug.input = slug;
    }
  };

  $scope.createArticle = function() {
    api.post('articles', {
      subject: $scope.article.subject,
      slug: $scope.article.slug.input,
      body: '',
      type: $scope.article.type.selected
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
