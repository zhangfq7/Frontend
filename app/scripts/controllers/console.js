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
          console.log(data);
          if(data&&data.code==200){
            if (location.pathname) {
              var path = location.pathname
            }else {
              var path = ''
            }
            var durl =location.origin+path+'/ocmanager/v1/api/kerberos/getFile/'+Cookie.get('tenantId') +'/'+Cookie.get('username');
            console.log('durl', durl);
            console.log('location', location);
            location.href=durl;

         }else{
            Alert.open(data.message)
         }
      },function(err){

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
