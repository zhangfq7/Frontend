'use strict';

/**
 * Main Controller
 */
angular.module('basic')
  .controller('ConsoleCtrl',['$rootScope', '$scope','sso','colsso','Cookie','downloadkeytab','Alert',
    function ($rootScope, $scope,sso,colsso,Cookie,downloadkeytab,Alert) {
    //$rootScope.tab = "service";
    //console.log('homesso', colsso);
    Cookie.set('username', colsso['http_x_proxy_cas_loginname'],  24 * 3600 * 1000);
    $scope.loginname = colsso['http_x_proxy_cas_loginname'];
    $rootScope.isadmin = colsso.admin;
    $scope.download = function () {

       downloadkeytab.get({tenantId:Cookie.get('tenantId'),username:Cookie.get('username')},function (data) {
         if(data&&data.message){
           Alert.open(data.message)
         }else{
           var durl =location.origin+'/ocmanager/v1/api/kerberos/getkeytab/'+Cookie.get('tenantId') +'/'+Cookie.get('username');
           //console.log('url', durl);
           location.href=durl;
           //location.href=data;
         }

       },function(data){

         }
       )
    }
    //sso.get(function (data) {
    //  if (data['http_x_proxy_cas_loginname']) {
    //    $scope.loginname=data['http_x_proxy_cas_loginname']
    //    $rootScope.isadmin = data.admin;
    //    console.log('ssodata', data);
    //  }
    //
    //
    //}, function (err) {
    //  console.log('ssodata', err);
    //})
  }]);
