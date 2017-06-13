'use strict';

/**
 * Controller of the dashboard
 */
angular.module('basic')
  .controller('TenantCtrl',['$rootScope', '$scope','Confirm','newconfirm', function ($rootScope, $scope,Confirm,newconfirm) {
    $rootScope.tab = "tenant";
    $scope.treeOptions = {
      nodeChildren: "children",
      dirSelectable: true,
      injectClasses: {
        ul: "a1",
        li: "a2",
        liSelected: "a7",
        iExpanded: "a3",
        iCollapsed: "a4",
        iLeaf: "a5",
        label: "a6",
        labelSelected: "a8"
      }
    }
    $scope.dataForTheTree =
      [
        { "name" : "中信集团", "children" : [
          { "name" : "中信银行", "children" : [
              { "name" : "项目一", "age" : "32", "children" : [] },
              { "name" : "项目二", "age" : "34", "children" : [] },
              { "name" : "项目三", "age" : "34", "children" : [] }
          ]}
        ]},
        { "name" : "Albert", "age" : "33", "children" : [] },
        { "name" : "Ron", "age" : "29", "children" : [] }
      ];
    $scope.testlist = [{
      text: "Parent 3"
    },{
      text: "Parent 3"
    },{
      text: "Parent 3"
    },{
      text: "Parent 3"
    },{
      text: "Parent 3"
    },{
      text: "Parent 3"
    },{
      text: "Parent 3"
    },{
      text: "Parent 3"
    },{
      text: "Parent 3"
    },{
      text: "Parent 3"
    },];

    $scope.grid = {
      page: 1,
      size: 12,
      total:20,
    };
    ///访问信息
    $scope.checkInfo = function(){
      newconfirm.open();
    }
    //用户授权
    $scope.userAuthorize = function(){
      Confirm.open([{n:'a'},{n:'b'},{n:'c'},{n:'d'}],[{n:'2'},{n:'3'},{n:'4'},{n:'5'}],{oldUser:'',oldRole:'',description:''})
    }
    //修改用户授权
    $scope.updataUser = function(){
      Confirm.open([{n:'a'},{n:'b'},{n:'c'},{n:'d'}],[{n:'2'},{n:'3'},{n:'4'},{n:'5'}],{oldUser:'olduser',oldRole:'oldRole',description:"lalalalla"})
    }

  }]);
