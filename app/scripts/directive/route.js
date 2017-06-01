'use strict';
/**
 * Created by sorcerer on 2017/6/1.
 */

angular.module('basic.router', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home/dashboard");
    $stateProvider
    //home
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        abstract: true

      }).state('home.dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',

      }).state('home.dataModel', {
        url: '/dataModel',
        templateUrl: 'views/dataModel.html',
        controller: 'DataModelCtrl',

      }).state('home.setting', {
        url: '/setting',
        templateUrl: 'views/setting.html',
        controller: 'SettingCtrl',

      });


  }]);
