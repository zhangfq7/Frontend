/**
 * Created by sorcerer on 2017/6/7.
 */
"use strict";
angular.module('basic.services', ['ngResource'])
  .service('Cookie', [function () {
    this.set = function (key, val, expires) {
      var date = new Date();
      date.setTime(date.getTime() + expires);
      document.cookie = key + "=" + val + "; expires=" + date.toUTCString();
    };
    this.get = function (key) {
      var reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
      var arr = document.cookie.match(reg);
      if (arr) {
        return (arr[2]);
      }
      return null;
    };
    this.clear = function (key) {
      this.set(key, "", -1);
    };
  }])
  .factory('AuthInterceptor', ['$rootScope', '$q', 'AUTH_EVENTS', function ($rootScope, $q, AUTH_EVENTS) {
    var CODE_MAPPING = {
      401: AUTH_EVENTS.loginNeeded,
      403: AUTH_EVENTS.httpForbidden,
      419: AUTH_EVENTS.loginNeeded,
      440: AUTH_EVENTS.loginNeeded
    };
    return {
      request: function (config) {
        if (/^\/login/.test(config.url)) {
          return config;
        }
        if (/^\/signin/.test(config.url)) {
          return config;
        }
        //$rootScope.region=
        //var tokens = Cookie.get('df_access_token');
        //var regions = Cookie.get('region');
        //var token = '';
        ////console.log(tokens);
        //
        //if (tokens && regions) {
        //  var tokenarr = tokens.split(',');
        //  var region = regions.split('-')[2];
        //  //if (/^\/lapi\/v1\/orgs/.test(config.url)) {
        //  //    console.log(config.url);
        //  //}
        //
        //  if (/^\/lapi\/v1\/orgs/.test(config.url) || /^\/oapi/.test(config.url) || /^\/api/.test(config.url) || /^\/payment/.test(config.url) || /^\/v1\/repos/.test(config.url)) {
        //
        //    token = tokenarr[region - 1];
        //  } else {
        //    token = tokenarr[0];
        //  }
        //
        //  //console.log('tokenarr', tokenarr[region-1]);
        //} else {
        //  //console.log('token错误');
        //}
        //console.log(tokens,token, regions);
        //if (config.headers && token) {
        //  config.headers["Authorization"] = "Bearer " + token;
        //}
        //
        //if (/^\/hawkular/.test(config.url)) {
        //  config.headers["Hawkular-Tenant"] = $rootScope.namespace;
        //}
        //if (/^\/registry/.test(config.url)) {
        //  var Auth = localStorage.getItem("Auth")
        //  config.headers["Authorization"] = "Basic " + Auth;
        //}
        //if (config.method == 'PATCH') {
        //  config.headers["Content-Type"] = "application/merge-patch+json";
        //}
        //console.log('config.url', config.url);
        $rootScope.loading = true;
        return config;
      },
      requestError: function (rejection) {
        $rootScope.loading = false;
        return $q.reject(rejection);
      },
      response: function (res) {
        $rootScope.loading = false;
        return res;
      },
      responseError: function (response) {
        //alert(11)
        $rootScope.loading = false;
        var val = CODE_MAPPING[response.status];
        if (val) {
          $rootScope.$broadcast(val, response);
        }
        return $q.reject(response);
      }
    };
  }]).service('Confirm', ['$uibModal', function ($uibModal) {
  this.open = function (userList,roleList,nameobj) {
    return $uibModal.open({
      templateUrl: 'views/tpl/confirm.html',
      size: 'default',
      controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
        $scope.userList = userList ;
        $scope.roleList = roleList;
        $scope.newUser = nameobj.oldUser;
        $scope.newRole = nameobj.oldRole;
        $scope.description = nameobj.description;
        $scope.ok = function () {
          $uibModalInstance.close(true);
        };
        // 选择用户
        $scope.changeUser = function(name){
          $scope.newUser = name;
        }
        // 选择角色
        $scope.changeRole = function(name){
          $scope.newRole = name;
        }
        $scope.cancel = function () {
          $uibModalInstance.dismiss();
        };
      }]
    }).result;
  };
}]).service('newconfirm', ['$uibModal', function ($uibModal) {
  this.open = function (datacon) {
    return $uibModal.open({
      backdrop: 'static',
      templateUrl: 'views/tpl/newconfirm.html',
      size: 'default modal-lg',
      controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {


        $scope.con =datacon;

        $scope.cancel = function () {
          $uibModalInstance.dismiss();
        };
      }]
    }).result;
  };
}])

