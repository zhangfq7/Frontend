'use strict';

/**
 * Main Controller
 */
angular.module('basic')
  .controller('ConsoleCtrl',['$rootScope', '$scope','sso','colsso', function ($rootScope, $scope,sso,colsso) {
    //$rootScope.tab = "service";
    console.log('homesso', colsso);
    $scope.loginname = colsso['http_x_proxy_cas_loginname']
    $rootScope.isadmin = colsso.admin;
    //sso.get(function (data) {
    //  if (data['http_x_proxy_cas_loginname']) {
    //    $scope.loginname=data['http_x_proxy_cas_loginname']
    //    $rootScope.isadmin = data.admin;
    //    console.log('ssodata', data);
    //  }
    //
    //
    //}, function (err) {
    //  console.log('ssodata', err);
    //})
  }]);
