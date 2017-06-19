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
    var user = $resource(GLOBAL.host + '/user/:id', {id:'@id'}, {
      create: {method: 'POST'},
      updata: {method: 'PUT'},
      delete: {method: "DELETE"}
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
  .factory('tenantuser', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var tenantuser = $resource(GLOBAL.host + '/tenant/:id/users', {id:'@id'}, {
    });
    return tenantuser;
  }])
  .factory('deltenantuser', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var tenantuser = $resource(GLOBAL.host + '/tenant/:id//user/:userId/role/assignment', {id:'@id',userId:"@userId"}, {
      delete: {method: "DELETE"}
    });
    return tenantuser;
  }])
///ocmanager/v1/api/tenant／{id}/service/instances
  .factory('tenantbsi', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var tenantbsi = $resource(GLOBAL.host + '/tenant/:id/service/instances', {id:'@id'}, {
    });
    return tenantbsi;
  }])



