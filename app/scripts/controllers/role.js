'use strict';

/**
 * Controller of the dataModel
 */
angular.module('basic')
  .controller('RoleCtrl',['$rootScope', '$scope', function ($rootScope, $scope) {
    $rootScope.tab = "role";
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
