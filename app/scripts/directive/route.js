'use strict';
/**
 * Created by sorcerer on 2017/6/1.
 */

angular.module('basic.router', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home/platform");
    $stateProvider
    //home
      .state('console', {
        url: '/console',
        templateUrl: 'views/console.html',
        controller: 'ConsoleCtrl',
        abstract: true,
        resolve:{
          test: ['$http', function($http){
            return 1;
          }]
        }

      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        abstract: true,
      })
      .state('home.platform', {
        url: '/platform',
        templateUrl: 'views/platform.html',
        controller: 'PlatformCtrl',

      })
      .state('home.permission', {
        url: '/permission',
        templateUrl: 'views/permission.html',
        controller: 'PermissionCtrl',

      })
      .state('console.tenant', {
        url: '/tenant',
        templateUrl: 'views/tenant.html',
        controller: 'TenantCtrl',

      }).state('console.role', {
        url: '/role',
        templateUrl: 'views/role.html',
        controller: 'RoleCtrl',

      }).state('console.service', {
        url: '/service',
        templateUrl: 'views/service.html',
        controller: 'ServiceCtrl',

      });


  }]);
