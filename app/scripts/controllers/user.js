'use strict';

/**
 * Main Controller
 */
angular.module('basic').controller('UserCtrl', ['$rootScope', '$scope','user_Confirm','user_change_Confirm','user_del_Confirm', function ($rootScope, $scope,user_Confirm,user_change_Confirm,user_del_Confirm) {
  $rootScope.tab = "user";

  //用户管理-添加
  $scope.adduser = function () {
    user_Confirm.open();
  };
//用户管理-修改
  $scope.changeuser = function () {
    user_change_Confirm.open();
  };
//用户管理-删除
  $scope.deluser = function () {
    user_del_Confirm.open();
  };
}]);
