'use strict';

/**
 * Controller of the dashboard
 */
angular.module('basic')
  .controller('TenantCtrl',['$rootScope', '$scope','test', function ($rootScope, $scope,test) {
    console.log('test', test);
    //$rootScope.tab = "tenant";
    //$scope.labels1 = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    //$scope.data1 = [300, 500, 100, 40, 120];
    //$scope.labels2 = ["January", "February", "March", "April", "May", "June", "July"];
    //$scope.series2 = ['Series A', 'Series B'];
    //$scope.data2 = [
    //  [65, 59, 80, 81, 56, 55, 40],
    //  [28, 48, 40, 19, 86, 27, 90]
    //];
    //$scope.labels3 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    //$scope.series3 = ['Series A', 'Series B'];
    //$scope.data3 = [
    //  [65, 59, 80, 81, 56, 55, 40],
    //  [28, 48, 40, 19, 86, 27, 90]
    //];
    var data = [
      {
        text: "Parent 1",
        nodes: [
          {
            text: "Child 1",
            nodes: [
              {
                text: "Grandchild 1"
              },
              {
                text: "Grandchild 2"
              }
            ]
          },
          {
            text: "Child 2"
          }
        ]
      },
      {
        text: "Node 1",
        expandIcon: 'glyphicon glyphicon-chevron-right',
        collapseIcon: 'glyphicon glyphicon-chevron-down',
        nodeIcon: 'glyphicon glyphicon-bookmark',
        color: "#000000",
        backColor: "#FFFFFF",
        href: "#node-1",
        selectable: true,
        state: {
          checked: true,
          //disabled: true,
          expanded: true,
          selected: true
        },
        tags: ['available'],
        nodes: [

        ]
      },
      {
        text: "Parent 3"
      },
      {
        text: "Parent 4"
      },
      {
        text: "Parent 5"
      }
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
    function getTree() {
      // Some logic to retrieve, or generate tree structure
      return data;
    }

    $scope.grid = {
      page: 1,
      size: 12,
      total:20
    };
    //$('#tree').treeview({data: getTree()});
    var defaultData = [
      {
        text: 'Parent 1',
        href: '#parent1',
        tags: ['4'],
        nodes: [
          {
            text: 'Child 1',
            href: '#child1',
            tags: ['2'],
            nodes: [
              {
                text: 'Grandchild 1',
                href: '#grandchild1',
                tags: ['0']
              },
              {
                text: 'Grandchild 2',
                href: '#grandchild2',
                tags: ['0']
              }
            ]
          },
          {
            text: 'Child 2',
            href: '#child2',
            tags: ['0']
          }
        ]
      },
      {
        text: 'Parent 2',
        href: '#parent2',
        tags: ['0']
      },
      {
        text: 'Parent 3',
        href: '#parent3',
        tags: ['0']
      },
      {
        text: 'Parent 4',
        href: '#parent4',
        tags: ['0']
      },
      {
        text: 'Parent 5',
        href: '#parent5'  ,
        tags: ['0']
      }
    ];
    $('#tree').treeview({
      color: "#428bca",
      expandIcon: 'a b',
      collapseIcon: 'a c',
      nodeIcon: '',
      data: defaultData
    });
    $('#tree').on('nodeSelected', function(event, data) {
      console.log('event',event);
      console.log('data',data);
    });
  }]);
