'use strict';

/**
 * Main Controller
 */
angular.module('basic')
  .controller('ConsoleCtrl',['$rootScope', '$scope','sso', function ($rootScope, $scope,sso) {
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
