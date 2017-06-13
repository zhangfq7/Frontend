'use strict';

/**
 * Controller of the operation
 */
angular.module('basic')
  .controller('ServiceCtrl',['$rootScope', '$scope','service', function ($rootScope, $scope,service) {
    //$rootScope.tab = "service";
    service.query(function (data) {
      console.log('data', data);
      $scope.serves=data
    }, function (err) {
      console.log('err', err);
    })
  }]);
