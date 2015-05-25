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
      ;

  });
