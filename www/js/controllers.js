app.controller('OperatorController', ['$scope', 'OperatorStubService', function($scope, OperatorStubService) {
  $scope.operators = 'Loading data..';  
  OperatorStubService.getHelloWorld()
    .success(function (data) {
        console.log(data);
        $scope.operators = data.content;
    })
    .error(function (error) {
        $scope.operators = 'Unable to load data: ' + error.message;
    });
}]);

app.controller('CommonController', ['$scope', 'CommonStubService', function($scope, CommonStubService) {
  $scope.getAllEvents = function(){
    CommonStubService.getAllEvents()
    .success(function (data) {
      console.log(data);
      $scope.events = data;
    })
    .error(function (error) {
      $scope.events = 'Unable to load events: ' + error.message;
    });
  }
  
  $scope.getBatteryLevel = function() {
    var lvl = CommonStubService.getBatteryLevel();
    console.log('battery level -> ' + lvl);
    $scope.batterylvl = lvl;
    alert(lvl);
  }
}]);

app.controller('ComsysController', ['$scope', 'ComsysStubService', function($scope, ComsysStubService) {

}]);

app.controller('MasterController', ['$scope', 'MasterStubService', function($scope, MasterStubService) {
  var user = {
    username: 'admin',
    password: 'admin'
  };
  
  $scope.login = function() {
    
     MasterStubService.login(user)
     .success(function (data) {
        console.log(data);
        $scope.loginResult = data;
    })
    .error(function (error) {
        $scope.loginResult = 'Unable to load data: ' + error.message;
    });
    
  }
}]);

