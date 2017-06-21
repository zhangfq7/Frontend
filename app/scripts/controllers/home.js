'use strict';

/**
 * Controller of the operation
 */
angular.module('basic')
  .controller('HomeCtrl',['$rootScope', '$scope','sso', function ($rootScope, $scope,sso) {
    //$rootScope.tab = "service";
    sso.get(function (data) {
      //console.log('ssodata', data);
    }, function (err) {
      console.log('ssodata', err);
    })
  }]);
