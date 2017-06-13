'use strict';

/**
 * Controller of the operation
 */
angular.module('basic')
  .controller('ServiceCtrl',['$rootScope', '$scope','service_Confirm','service_change_Confirm','service_del_Confirm', function ($rootScope, $scope,service_Confirm,service_change_Confirm,service_del_Confirm) {
    //$rootScope.tab = "service";
    //服务管理-添加
    $scope.addservice = function () {
      service_Confirm.open();
    };
    //服务管理-修改
    $scope.changeservice = function () {
      service_change_Confirm.open();
    };
    //服务管理-删除
    $scope.delservice = function () {
      service_del_Confirm.open();
    };
  }]);
