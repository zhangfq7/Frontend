'use strict';

/**
 * Controller of the dashboard
 */
angular.module('basic')
  .controller('TenantCtrl', ['$rootScope', '$scope', 'Confirm', 'newconfirm', 'tenant', 'delconfirm', 'tenantchild', 'tree', 'tenantuser', 'tenantbsi', 'bsidata',
    function ($rootScope, $scope, Confirm, newconfirm, tenant, delconfirm, tenantchild, tree, tenantuser, tenantbsi, bsidata) {
      var thisheight = $(window).height() - 80;
      $('.tree-light').height(thisheight);
      $scope.nodeId = tree[0].id;
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

      //$scope.dataForTheTree =
      //  [
      //    {
      //      "name": "中信集团", "children": [{
      //      "name": "中信银行", "children": [
      //        {"name": "项目一", "age": "32", "children": []},
      //        {"name": "项目二", "age": "34", "children": []},
      //        {"name": "项目三", "age": "34", "children": []}
      //      ]
      //    }
      //    ]
      //    },
      //    {"name": "Albert", "age": "33", "children": []},
      //    {"name": "Ron", "age": "29", "children": []}
      //  ];
      //console.log('tree', tree);
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

      var refresh = function (page) {
        var skip = (page - 1) * $scope.grid.bsisize;
        if ($scope.bsis.length) {
          $scope.bsisitem = $scope.bsis.slice(skip, skip + $scope.grid.bsisize);
        } else {
          $scope.bsisitem = [];
        }
      };
      var refreshuser = function (page) {
        var skip = (page - 1) * $scope.grid.usersize;
        if ($scope.users.length) {
          $scope.useritem = $scope.users.slice(skip, skip + $scope.grid.usersize);
        } else {
          $scope.useritem = [];
        }
      };
      $scope.$watch('grid.bsipage', function (newVal, oldVal) {
        if (newVal != oldVal) {
          refresh(newVal);
        }
      });
      $scope.$watch('grid.userpage', function (newVal, oldVal) {
        if (newVal != oldVal) {
          refreshuser(newVal);
        }
      });
      // 获取租户下用户列表
      var gettenantuser = function(id){
        $scope.users=[];
        tenantuser.query({id:id}, function (users) {
          console.log('user', users);
          $scope.users = users;
          $scope.grid.usertotal = $scope.users.length;
          refreshuser(1)
        }, function (err) {

        });
      }
      /////获取租户信息
      var getUserInfo = function(id){

        $scope.bsis=[];
        $scope.childrens=[];
        gettenantuser(id)
        tenantbsi.query({id:id}, function (bsis) {
          $scope.bsis=bsis;
          if (bsis[0] && bsis[0].instanceName) {
            //bsidata.get({id: $scope.nodeId, name: bsis[0].instanceName}, function (sdata) {
            //  console.log('sbsi', bsis);
            //}, function (err) {
            //  console.log('sbsierr', err);
            //})
            bsidata.get({id: 'datafoundry', name: 'rmq-instance'}, function (sdata) {
              console.log('sbsi', sdata);
            }, function (err) {
              console.log('sbsierr', err);
            })
          }
          $scope.grid.bsitotal = $scope.bsis.length;
          refresh(1);

          console.log('bsi', bsis);
        }, function (err) {

        })
        tenantchild.query({id: id}, function (childrens) {
          console.log('child', childrens);
          $scope.childrens = childrens
        }, function (err) {

        })
      }
      //console.log('$scope.treemap', $scope.dataForTheTree[0].id);
      //getUserInfo($scope.dataForTheTree[0].id);

      //console.log('$scope.sidebar', $scope.sidebar);



      $scope.grid = {
        userpage: 1,
        usersize: 10,
        usertotal: 0,
        bsipage: 1,
        bsisize: 10,
        bsitotal:0,
        showCompany: true,//展示子公司列表
        showProject: false,//展示子项目列表
        showChildnode: false,//展示子项目列表
        roleTitle:tree[1].name,
        treeId : ''
      };
      var roleDemoList = ['a10170cb-524a-11e7-9dbb-fa163ed7d0ae',
        'a1149421-524a-11e7-9dbb-fa163ed7d0ae',
        'a12a84d0-524a-11e7-9dbb-fa163ed7d0ae',
        'a13dd087-524a-11e7-9dbb-fa163ed7d0ae'
      ]
      $scope.roleDemoList = roleDemoList.slice(0, 1)
      ///访问信息
      $scope.checkInfo = function () {
        newconfirm.open();
      }
      //用户授权
      $scope.userAuthorize = function () {
        Confirm.open($scope.users, $scope.roleDemoList, {
          oldUser: '',
          oldRole: $scope.roleDemoList[0],
          oldUserId: $scope.users[0].userId,
          description: '',
          isAdd:true,
          nodeId:$scope.nodeId
        }).then(
          function(){
            gettenantuser($scope.nodeId)
          }
        )
      }
      //修改用户授权
      $scope.updataUser = function (item) {
        Confirm.open($scope.users,$scope.roleDemoList, {
          oldUser: item.userName,
          oldRole:  item.roleId,
          oldUserId :item.userId,
          description: item.userDescription,
          isAdd:false,
          nodeId:$scope.nodeId
        })
      }
      // 左侧导航切换
      $scope.showSelected = function (node) {
        $scope.grid.roleTitle = node.name;
        $scope.nodeIf = node;
        $scope.nodeId = node.id;
        getUserInfo(node.id);
        console.log('1111',node);
        if (node.children.length > 0&&node.parentId) {
          $scope.grid.showCompany = false;
          $scope.grid.showProject = true;
          $scope.grid.showChildnode = false;
          $('.right-nav>li').eq(1).addClass('active').siblings().removeClass('active');
          $('.right-content>li').eq(1).show().siblings().hide();

        }else if(node.children.length > 0){
          $scope.grid.treeId = 2
          $scope.roleDemoList = roleDemoList.slice(1,2)
          $scope.grid.showCompany = true;
          $scope.grid.showProject = false;
          $scope.grid.showChildnode = false;
          $('.right-nav>li').eq(0).addClass('active').siblings().removeClass('active');
          $('.right-content>li').eq(0).show().siblings().hide();

        } else {
          $scope.roleDemoList = roleDemoList.slice(2)
          $scope.grid.showCompany = false;
          $scope.grid.showProject = false;
          $scope.grid.showChildnode = true;
          $('.right-nav>li').eq(2).addClass('active').siblings().removeClass('active');
          $('.right-content>li').eq(2).show().siblings().hide();
        }
      }
      $scope.showSelected($scope.dataForTheTree[0]);
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
      $scope.delUser = function (userId) {
        delconfirm.open('用户', $scope.nodeId,userId).then(
          function(){
            gettenantuser($scope.nodeId)
          }
        )
      }
      var subTitle =
          '<span style="color:#ff304a; font-size:16px;">' + "20%" + '</span>'
        ;
      $scope.charts = {
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
            text: subTitle,
            style: {
              lineHeight: '20px'
            },
            align: 'center',
            verticalAlign: 'middle',
            x: 0,
            y: 5

          }
        },
        series: [{
          type: 'pie',
          colors: ['#c6c6c6', '#ff304a'],
          data: [
            ['已用', 50],
            ['未使用', 100 - 50]
          ],
          dataLabels: {
            enabled: false
          },
          innerSize: '80%'
        }],
        size: {
          height: 150,
          width: 150
        },

        func: function (chart) {
          //setup some logic for the chart
        }
      }
      $scope.testlist = [[{m: 'a'}], [{m: 'b'}, {m: 'c'}]]
      $scope.test = function (pIdx, idx) {
        console.log(pIdx);
        console.log(idx);
        if ($scope.testlist[pIdx][idx].isshow) {
          $scope.testlist[pIdx][idx].isshow = false;
        } else {
          $scope.testlist[pIdx][idx].isshow = true;
        }
      }
      $scope.toggle = function (idx) {
        if ($scope.testlist[idx].isshow) {
          $scope.testlist[idx].isshow = false;
        } else {
          $scope.testlist[idx].isshow = true;
        }
      }
    }]);
