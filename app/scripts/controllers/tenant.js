'use strict';

/**
 * Controller of the dashboard
 */
angular.module('basic')
  .controller('TenantCtrl', ['$rootScope', '$scope', 'Confirm', 'newconfirm', 'tenant', 'delconfirm', 'tenantchild', 'tree','tenantuser','tenantbsi',
    function ($rootScope, $scope, Confirm, newconfirm, tenant, delconfirm, tenantchild, tree,tenantuser,tenantbsi) {
      var thisheight = $(window).height() - 80;
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
      $scope.dataForTheTree = [];
      $scope.treemap = {};

      angular.forEach(tree, function (item, i) {
        $scope.treemap[item.id] = item
        $scope.treemap[item.id].children = [];
      })
      //console.log('$scope.treemap', $scope.treemap);
      angular.forEach(tree, function (item, i) {
        if (item.parentId) {
          //console.log('$scope.treemap[item.parentId]', $scope.treemap[item.parentId]);
          if ($scope.treemap[item.parentId]) {
            $scope.treemap[item.parentId].children.push(item)
          } else {
            delete $scope.treemap[item.id].parentId
            $scope.dataForTheTree.push($scope.treemap[item.id])
          }
        } else {
          $scope.dataForTheTree.push($scope.treemap[item.id])
        }
      })


      console.log('$scope.treemap', $scope.dataForTheTree[0].id);
      tenantuser.query({id:$scope.dataForTheTree[1].id}, function (users) {
        console.log('user', users);
        $scope.users=users
      }, function (err) {

      })
      tenantbsi.query({id:$scope.dataForTheTree[1].id}, function (bsis) {
        $scope.bsis=bsis
        console.log('bsi', bsis);
      }, function (err) {

       })
      tenantchild.query({id:$scope.dataForTheTree[1].id}, function (childrens) {
        console.log('child', childrens);
        $scope.childrens =childrens
      }, function (err) {

      })

      //console.log('$scope.sidebar', $scope.sidebar);



      $scope.grid = {
        page: 1,
        size: 12,
        total: 20,
        showCompany: true,//展示子公司列表
        showProject: false,//展示子项目列表
        showChildnode: false,//展示子项目列表
      };
      ///访问信息
      $scope.checkInfo = function () {
        newconfirm.open();
      }
      //用户授权
      $scope.userAuthorize = function () {
        Confirm.open([{n: 'a'}, {n: 'b'}, {n: 'c'}, {n: 'd'}], [{n: '2'}, {n: '3'}, {n: '4'}, {n: '5'}], {
          oldUser: '',
          oldRole: '',
          description: ''
        })
      }
      //修改用户授权
      $scope.updataUser = function () {
        Confirm.open([{n: 'a'}, {n: 'b'}, {n: 'c'}, {n: 'd'}], [{n: '2'}, {n: '3'}, {n: '4'}, {n: '5'}], {
          oldUser: 'olduser',
          oldRole: 'oldRole',
          description: "lalalalla"
        })
      }

      // 左侧导航切换
      $scope.showSelected = function (node) {
        console.log(node);
        tenantuser.query({id:node.id}, function (users) {
          console.log('user', users);
          $scope.users=users
        }, function (err) {

        })
        tenantbsi.query({id:node.id}, function (bsis) {
          $scope.bsis=bsis
          console.log('bsi', bsis);
        }, function (err) {

        })
        tenantchild.query({id:node.id}, function (childrens) {
          console.log('child', childrens);
          $scope.childrens =childrens
        }, function (err) {

        })
        if (node.children.length > 0&&node.parentId) {

          $scope.grid.showCompany = false;
          $scope.grid.showProject = true;
          $scope.grid.showChildnode = false;
          $('.right-nav>li').eq(1).addClass('active').siblings().removeClass('active');
          $('.right-content>li').eq(1).show().siblings().hide();

        }else if(node.children.length > 0){
          $scope.grid.showCompany = true;
          $scope.grid.showProject = false;
          $scope.grid.showChildnode = false;
          $('.right-nav>li').eq(0).addClass('active').siblings().removeClass('active');
          $('.right-content>li').eq(0).show().siblings().hide();

        } else {
          $scope.grid.showCompany = false;
          $scope.grid.showProject = false;
          $scope.grid.showChildnode = true;
          $('.right-nav>li').eq(2).addClass('active').siblings().removeClass('active');
          $('.right-content>li').eq(2).show().siblings().hide();
        }
        //if (!node.parentId) {
        //
        //} else if (node.name == '中信银行') {
        //  $scope.grid.showCompany = false;
        //  $scope.grid.showProject = true;
        //  $scope.grid.showChildnode = false;
        //  $('.right-nav>li').eq(1).addClass('active').siblings().removeClass('active');
        //  $('.right-content>li').eq(1).show().siblings().hide();
        //} else {
        //
        //}
      }
      //右侧tabel切换
      $(function () {
        $('.right-nav>li').click(function () {
          console.log($(this).index())
          var idx = $(this).index();
          $('.right-nav>li').eq(idx).addClass('active').siblings().removeClass('active');
          $('.right-content>li').eq(idx).show().siblings().hide();
        })
      })
      // 删除用户
      $scope.delUser = function (name) {
        delconfirm.open('用户', 'lalala')
      }

    }]);
