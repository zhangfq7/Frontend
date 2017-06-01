'use strict';
/**
 * Created by sorcerer on 2017/6/1.
 */

angular.module('basic.router', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise("/home/index");
    //.config(function ($routeProvider) {
    //  $routeProvider
    //    .when('/', {
    //      templateUrl: 'views/main.html',
    //      controller: 'MainCtrl'
    //    })
    //    .when('/dashboard', {
    //      templateUrl: 'views/dashboard.html',
    //      controller: 'DashboardCtrl'
    //    })
    //    .when('/dataModel', {
    //      templateUrl: 'views/dataModel.html',
    //      controller: 'DataModelCtrl'
    //    })
    //    .when('/operation', {
    //      templateUrl: 'views/operation.html',
    //      controller: 'OperationCtrl'
    //    })
    //    .when('/library', {
    //      templateUrl: 'views/library.html',
    //      controller: 'LibraryCtrl'
    //    })
    //    .when('/setting', {
    //      templateUrl: 'views/main.html',
    //      controller: 'SettingCtrl'
    //    })
    //    .otherwise({
    //      redirectTo: '/'
    //    });
    //});
    $urlRouterProvider.otherwise("/home");
    $stateProvider
    //home
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',

      }).state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',

      }).state('operation', {
        url: '/operation',
        templateUrl: 'views/operation.html',
        controller: 'OperationCtrl',

      }).state('dataModel', {
        url: '/dataModel',
        templateUrl: 'views/dataModel.html',
        controller: 'DataModelCtrl',

      }).state('library', {
        url: '/library',
        templateUrl: 'views/library.html',
        controller: 'LibraryCtrl',

      }).state('setting', {
        url: '/setting',
        templateUrl: 'views/main.html',
        controller: 'SettingCtrl',

      });


  }]);
