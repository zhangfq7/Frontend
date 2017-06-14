'use strict';

/**
 * Controller of the dashboard
 */
angular.module('basic')
  .controller('TenantCtrl',['$rootScope', '$scope','Confirm','newconfirm', 'delconfirm',function ($rootScope, $scope,Confirm,newconfirm,delconfirm) {
    $rootScope.tab = "tenant";
    var thisheight = $(window).height()-80;
    $('.tree-light').height(thisheight);
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
      showCompany:true,//展示子公司列表
      showProject:false,//展示子项目列表
      showChildnode:false,//展示子项目列表
      roleTitle:'中信集团'
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
    // 左侧导航切换
    $scope.showSelected = function(node){
      console.log(node);
      $scope.grid.roleTitle = node.name;
      if(node.name == '中信集团'){
        $scope.grid.showCompany = true;
        $scope.grid.showProject = false;
        $scope.grid.showChildnode = false;
        $('.right-nav>li').eq(0).addClass('active').siblings().removeClass('active');
        $('.right-content>li').eq(0).show().siblings().hide();
      }else if(node.name == '中信银行'){
        $scope.grid.showCompany = false;
        $scope.grid.showProject = true;
        $scope.grid.showChildnode = false;
        $('.right-nav>li').eq(1).addClass('active').siblings().removeClass('active');
        $('.right-content>li').eq(1).show().siblings().hide();
      }else{
        $scope.grid.showCompany = false;
        $scope.grid.showProject = false;
        $scope.grid.showChildnode = true;
        $('.right-nav>li').eq(2).addClass('active').siblings().removeClass('active');
        $('.right-content>li').eq(2).show().siblings().hide();
      }
    }
    //右侧tabel切换
    $(function(){
      $('.right-nav>li').click(function(){
        console.log( $(this).index())
        var idx = $(this).index();
        $('.right-nav>li').eq(idx).addClass('active').siblings().removeClass('active');
        $('.right-content>li').eq(idx).show().siblings().hide();
      })
    })
    // 删除用户
    $scope.delUser = function(name){
      delconfirm.open('用户','lalala')
    }
    //资源状态  tp, dec, percent, quota, color
    $scope.chartConfig = {
      options: {
        title: {
          text: ''
        },
        tooltip: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        subtitle: {
          text: '222',
          style: {
            lineHeight: '20px'
          },
          align: 'center',
          verticalAlign: 'middle',
          x: 0,
          y: -10

        }
      },
      series: [{
        type: 'pie',
        colors: ['#f6a540', '#c6c6c6'],
        data: [
          ['已用', percent],
          ['未使用', 100 - percent]
        ],
        dataLabels: {
          enabled: false
        },
        innerSize: '88%'
      }],
      size: {
        height: 200,
        width: 200
      },

      func: function (chart) {
        //setup some logic for the chart
      }
    };
  }]);
