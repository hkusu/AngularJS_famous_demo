'use strict';

angular.module('famousAngularTest2App')
  .controller('MainCtrl', ['$scope', '$famous', function ($scope, $famous) {

    $scope.hoge = 'Hello!!';

    // 何やってるか不明。今回だとこれ書かなくても動く
    var EventHandler = $famous['famous/core/EventHandler'];
    $scope.eventHandler = new EventHandler();

  }])
;
