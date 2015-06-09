'use strict';

module.exports = {

  development: {
    API_URL: 'http://localhost:3000',
  },
  production: {
    API_URL: process.env.GB_API_SERVER_URL,
  },

};
