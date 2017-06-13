'use strict';

/**
 * Main Controller
 */
angular.module('basic')
  .controller('UserCtrl', ['$rootScope', '$scope','user', function ($rootScope, $scope,user) {
    user.query(function (data) {
      console.log('data', data);
      $scope.users=data;
    }, function (err) {
      console.log('err', err);
    })

}]);
