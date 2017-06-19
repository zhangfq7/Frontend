'use strict';

/**
 * Controller of the operation
 */
angular.module('basic')
  .controller('ServiceCtrl',['$rootScope', '$scope','service','service_Confirm','service_change_Confirm','service_del_Confirm', function ($rootScope, $scope,service,service_Confirm,service_change_Confirm,service_del_Confirm) {
    //$rootScope.tab = "service";
    service.query(function (data) {
      console.log('data', data);
      $scope.serves=data
      $scope.grid.total = data.length;
      refresh(1)
    }, function (err) {
      console.log('err', err);
    })



    $scope.grid = {
      st:null,
      et:null,
      auto:null,
      page: 1,
      size: 4,
    };


    $scope.$watch('grid.page', function(newVal, oldVal){
      if (newVal != oldVal) {
        refresh(newVal);
      }
    });

    var refresh = function(page) {
      $(document.body).animate({
        scrollTop: 0
      }, 200);
      var skip = (page - 1) * $scope.grid.size;
      $scope.items = $scope.serves.slice(skip, skip + $scope.grid.size);
    };


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
    }




  }]);
