/**
 * Created by sorcerer on 2017/6/12.
 */
'use strict';

/**
 * Controller of the operation
 */
angular.module('basic')
  .controller('PlatformCtrl',['$rootScope', '$scope','role', function ($rootScope, $scope,role) {
    //$rootScope.tab = "service";
    role.query(function (data) {
      console.log('data', data);
    }, function (err) {
      console.log('err', err);
    })

    //图片预加载
    var images = new Array()
    function preload() {
      for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image()
        images[i].src = arguments[i]
      }
    };
    preload(
      "img/home_tenant.png",
      "img/home_orange.png",
      "img/home_genplum.png",
      "img/home_mongo.png"
    );

  }]);
