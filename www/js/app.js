var app = angular.module('starter', ['ionic', 'ngCordova']);


app.run(function($ionicPlatform, $ionicPopup, $rootScope, $cordovaBatteryStatus) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    
    $rootScope.$on('$cordovaBatteryStatus:status', function (result) {
      console.log(result);
      alert(result);
      var batteryLevel = result.level;       // (0 - 100)
      var isPluggedIn  = result.isPlugged;   // bool
    });

    $rootScope.$on('$cordovaBatteryStatus:critical', function (result) {
      var batteryLevel = result.level;       // (0 - 100)
      var isPluggedIn  = result.isPlugged;   // bool
    });

    $rootScope.$on('$cordovaBatteryStatus:low', function (result) {
      var batteryLevel = result.level;       // (0 - 100)
      var isPluggedIn  = result.isPlugged;   // bool
    });
     
  });
  
})

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  
  //$httpProvider.defaults.useXDomain = true; // Needed?
  $httpProvider.defaults.withCredentials = true;
  
  $stateProvider
    .state('common', {
    url: "/common",
    templateUrl: "partials/common-partial.html",
    controller: 'CommonController'
  })

  .state('operator', {
    url: "/operator",
    templateUrl: "partials/operator-partial.html",
    controller: 'OperatorController'
  })
  
  .state('comsys', {
    url: "/comsys",
    templateUrl: "partials/comsys-partial.html",
    controller: 'ComsysController'
  })
  
  .state('master', {
    url: "/master",
    templateUrl: "partials/master-partial.html",
    controller: 'MasterController'
  })

    .state('superadmin', {
    url: "/superadmin",
    templateUrl: "partials/superadmin-partial.html",
    controller: 'SuperAdminController'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/common');

});