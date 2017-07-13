'use strict';
angular.module('basic.resource', ['ngResource'])
  .factory('role', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var role = $resource(GLOBAL.host + '/role', {}, {
    });
    return role;
  }])
///ocmanager/v1/api/service
  .factory('service', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var service = $resource(GLOBAL.host + '/service', {

    }, {
      create: {method: 'POST'}
    });
    return service;
  }])
  .factory('broker', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var broker = $resource(GLOBAL.host + '/service/broker', {

    }, {
      create: {method: 'POST'}
    });
    return broker;
  }])
  .factory('user', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var user = $resource(GLOBAL.host + '/user/:id', {id:'@id'}, {
      create: {method: 'POST'},
      updata: {method: 'PUT'},
      delete: {method: "DELETE"}
    });
    return user;
  }])
  .factory('putuser', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var putuser = $resource(GLOBAL.host + '/user', {}, {
      updata: {method: 'PUT'}
    });
    return putuser;
  }])
  .factory('tenant', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var tenant = $resource(GLOBAL.host + '/tenant/:id', {id:'@id'}, {
    });
    return tenant;
  }])
  .factory('tenantname', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var tenantname = $resource(GLOBAL.host + '/user/name/:name/all/tenants', {name:'@name'}, {
    });
    return tenantname;
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
    var tenantuser = $resource(GLOBAL.host + '/tenant/:id/user/:userId/role/assignment', {id:'@id',userId:"@userId"}, {
      delete: {method: "DELETE"}
    });
    return tenantuser;
  }])
  .factory('cGtenantuser', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var tenantuser = $resource(GLOBAL.host + '/tenant/:id/user/role/assignment', {id:'@id'}, {
      post: {method: "POST"},
      put: {method: "put"}
    });
    return tenantuser;
  }])
///ocmanager/v1/api/tenant／{id}/service/instances
  .factory('tenantbsi', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var tenantbsi = $resource(GLOBAL.host + '/tenant/:id/service/instances', {id:'@id'}, {
    });
    return tenantbsi;
  }])
  .factory('allbsi', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var allbsi = $resource(GLOBAL.host + '/service/all/instances', {id:'@id'}, {
    });
    return allbsi;
  }])
  .factory('sso', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var sso = $resource(GLOBAL.host + '/sso/user', {}, {
    });
    return sso;
  }])

  .factory('bsidata', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var bsidata = $resource(GLOBAL.bdxhost + '/namespaces/:id/instances/:name', {id:'@id',name:'@name'}, {
    });
    return bsidata;
  }])
  .factory('userole', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var userole = $resource(GLOBAL.host + '/tenant/:id/user/:name/role', {
      id:'@id',
      name:'@name'
    }, {
    });
    return userole;
  }])
  .factory('serveinfo', ['$resource', 'GLOBAL', function ($resource, GLOBAL) {
    var serveinfo = $resource(GLOBAL.host + '/tenant/:tenantId/service/instance/:serviceInstanceName/access/info', {tenantId:'@tenantId',serviceInstanceName:'@serviceInstanceName'}, {
    });
    return serveinfo;
  }]);



