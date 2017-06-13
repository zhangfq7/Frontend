'use strict';
angular.module('basic.resource', ['ngResource'])
  .factory('role', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var role = $resource(GLOBAL.host + '/role', {}, {
    });
    return role;
  }])
  .factory('service', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var service = $resource(GLOBAL.host + '/service', {}, {
    });
    return service;
  }])


