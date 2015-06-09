'use strict';

angular
.module('go.blog')
.constant('PAGE_SIZE', 6)
.constant('subdomain', (function () {

  /* global window */
  var full = window.location.host;

  // window.location.host is subdomain.domain.com
  var parts = full.split('.');
  var len = parts.length;
  if (parts.length <= 2) {
    return '';
  }

  var sub = parts.slice(0, len - 2).join('.');

  return sub;
})())
.config(function (

  // dependencies
  subdomain,

  $stateProvider,
  $urlRouterProvider

) {

  // Check if subdomain exists.
  //
  // If subdomain exists, app works in 'user' mode.
  // Submain will be used as blog owner's name,
  // and all the pages will serve only the owner's contents.
  //
  // If subdomain does not exist, app works in 'root' mode.
  // root page and some pages like /admin
  // will be additionally served.
  // Plus, the first level path will be used as blog owner's name,
  // and the subpath will be used as absolute path in 'user' mode.
  //
  // For example,
  //
  // http://go-blog.com/aaa/look/this/page
  //
  // is an alias of
  //
  // http://aaa.go-blog.com/look/this/page
  var mode = subdomain ? 'user' : 'root';
  console.log('subdomain: ' + subdomain);
  console.log('mode: ' + mode);

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
    controller: 'home',
    resolve: {
      articles: ['api', 'PAGE_SIZE', function (api, PAGE_SIZE) {
        return api.get('articles?pagesize=' + PAGE_SIZE);
      }]
    }
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

  .state('main.article.edit', {
    url: '/edit',
    templateUrl: 'views/article.edit.html',
    controller: 'article.edit'
  })
  ;

});
