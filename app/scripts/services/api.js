'use strict';

angular.module('go.blog')
.provider('api', function ApiProvider() {

  var baseUrl = '';

  this.setBaseUrl = function(url) {
    baseUrl = url;

    if (baseUrl[baseUrl.length - 1] !== '/') {
      baseUrl = baseUrl + '/';
    }
  };

  this.$get = ['$http', '$window', '$q', function apiFactory($http, $window, $q) {

    function addToken (config) {

      config = config || {};

      // Add token
      if ($window.sessionStorage.token) {
        config.headers = config.headers || {};
        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
      }

      return config;
    }

    function errorHandler (res) {
      if (res.status === 401) {

        // handle the case where the user is not authenticated
        if ($window.sessionStorage.token) {
          delete $window.sessionStorage.token;
        }
      }

      return $q.reject(res);
    }

    return {

      get: function (url, config) {
        return $http.get(
          baseUrl + url, addToken(config)
        ).then(function (res) {
          return res.data;
        }, errorHandler);
      },

      del: function (url, config) {
        return $http.delete(
          baseUrl + url, addToken(config)
        ).then(function (res) {
          return res.data;
        }, errorHandler);
      },

      post: function (url, data, config) {
        return $http.post(
          baseUrl + url, data, addToken(config)
        ).then(function (res) {
          return res.data;
        }, errorHandler);
      },

      put: function (url, data, config) {
        return $http.put(
          baseUrl + url, data, addToken(config)
        ).then(function (res) {
          return res.data;
        }, errorHandler);
      }

    };
  }];

});
