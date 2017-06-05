'use strict';
angular.module('basic.resource', ['ngResource'])
  .factory('User', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var User = $resource(GLOBAL.host + '/users/:name', {name: '@name', region: '@region'}, {
      create: {method: 'POST'}
    });
    return User;
  }])


