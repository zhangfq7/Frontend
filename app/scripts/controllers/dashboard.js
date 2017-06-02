'use strict';

/**
 * Controller of the dashboard
 */
angular.module('basic')
  .controller('DashboardCtrl',['$rootScope', '$scope', function ($rootScope, $scope) {
    //$rootScope.tab = "dashboard";
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
        text: "Parent 2"
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
    function getTree() {
      // Some logic to retrieve, or generate tree structure
      return data;
    }

    $('#tree').treeview({data: getTree()});
    $('#tree').on('nodeSelected', function(event, data) {
        console.log('event',event);
        console.log('data',data);
    });
  }]);
