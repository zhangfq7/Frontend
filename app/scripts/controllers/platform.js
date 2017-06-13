/**
 * Created by sorcerer on 2017/6/12.
 */
'use strict';

/**
 * Controller of the operation
 */
angular.module('basic')
  .controller('PlatformCtrl',['$rootScope', '$scope','role', function ($rootScope, $scope,role) {
    //$rootScope.tab = "service";
    role.query(function (data) {
      console.log('data', data);
    }, function (err) {
      console.log('err', err);
    })
  }]);
