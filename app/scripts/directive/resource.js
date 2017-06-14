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
  .factory('user', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var user = $resource(GLOBAL.host + '/user', {}, {
    });
    return user;
  }])
  .factory('tenant', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var tenant = $resource(GLOBAL.host + '/tenant/:id', {id:'@id'}, {
    });
    return tenant;
  }])
  .factory('tenantchild', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var tenantchild = $resource(GLOBAL.host + '/tenant/:id/children', {id:'@id'}, {
    });
    return tenantchild;
  }])


