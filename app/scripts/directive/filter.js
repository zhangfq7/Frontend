"use strict";
angular.module('basic.filter', [])
  .filter('phaseFilter', [function() {
    return function(phase) {
      if (phase === "a10170cb-524a-11e7-9dbb-fa163ed7d0ae") {
        return "系统管理员";
      } else if (phase === "a1149421-524a-11e7-9dbb-fa163ed7d0ae") {
        return "公司管理员";
      } else if (phase === "a12a84d0-524a-11e7-9dbb-fa163ed7d0ae") {
        return "项目管理员";
      } else if (phase === "a13dd087-524a-11e7-9dbb-fa163ed7d0ae") {
        return "成员";
      } else {
        return phase || "-";
      }
    };
  }])
.filter('lowerCase', [function() {
  return function(res) {

    return res.toLowerCase()
  }
}])
.filter('filterkey', [function() {
  return function(res) {
    var arr=["yarnQueueQuota","volumeSize","partitionSize","topicQuota","storageSpaceQuota","nameSpaceQuota","maximumRegionsQuota","maximumTablesQuota"];
    var obj={};
    for(var key in res){
      for(var i = 0; i < arr.length; i++){
        if(key === arr[i]){
          obj[key]=res[key];
        }
      }
    }
    return obj
  }
}]);

