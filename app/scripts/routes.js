'use strict';

angular
.module('go.blog')
.config(function (

  // dependencies

  $stateProvider,
  $urlRouterProvider

) {


  /////////////////////////////
  // Redirects and Otherwise //
  /////////////////////////////

  // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
  $urlRouterProvider

  // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
  .otherwise('/');


  //////////////////////////
  // State Configurations //
  //////////////////////////

  $stateProvider

  ///////////
  // Main //
  ///////////

  .state('main', {
    abstract: true,
    url: '',
    templateUrl: 'views/main.html',
  })

  .state('main.home', {
    url: '/',
    templateUrl: 'views/home.html',
    //controller: 'home',
  })

  .state('main.article', {
    abstract: true,
    template: '<div data-ui-view=""></div>',
    url: '/articles/:article',
    resolve: {
      article: ['api', '$stateParams', function (api, $stateParams) {
        return api.get('articles/' + $stateParams.article);
      }]
    }
  })

  .state('main.article.view', {
    url: '',
    templateUrl: 'views/article.view.html',
    controller: 'article.view'
  })
  ;

});
