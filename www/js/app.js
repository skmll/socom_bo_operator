// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);//, 'ngCordova']);


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    
  });
  


   
})

app.controller('OperatorTestCtrl', ['$scope', 'OperatorStubService', function($scope, OperatorStubService) {
  $scope.operators = 'Loading data..';  
  OperatorStubService.getHelloWorld()
    .success(function (data) {
        console.log(data);
        $scope.operators = data.content;
    })
    .error(function (error) {
        $scope.operators = 'Unable to load data: ' + error.message;
    });
    /*
    $scope.getBatteryLevel = function() {
      var lvl = CommonStubService.getBatteryLevel();
      console.log('battery level -> ' + lvl);
      $scope.batterylvl = lvl;
      alert(lvl);
    }*/
}])