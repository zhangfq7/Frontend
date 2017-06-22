'use strict';

/**
 * Controller of the operation
 */
angular.module('basic')
  .controller('HomeCtrl',['$rootScope', '$scope','sso', function ($rootScope, $scope,sso) {
    //$rootScope.tab = "service";
    sso.get(function (data) {
      if (data['http_x_proxy_cas_loginname']) {
        $scope.loginname=data['http_x_proxy_cas_loginname']
        console.log('ssodata', data);
              }


    }, function (err) {
      console.log('ssodata', err);
    })
  }]);
