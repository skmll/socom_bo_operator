// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova']);


app.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    
    // Check for network connection
    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
        $ionicPopup.confirm({
          title: 'No Internet Connection',
          content: 'Sorry, no Internet connectivity detected. Please reconnect and try again.'
        })
        .then(function(result) {
          if(!result) {
            ionic.Platform.exitApp();
          }
        });
      }
    }
    
  });
  
})

app.config(function($stateProvider, $urlRouterProvider) {
  
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