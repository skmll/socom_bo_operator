app.controller('OperatorController', ['$scope', 'OperatorStubService', function($scope, OperatorStubService) {
  $scope.hello = 'Loading data..';  
  
  OperatorStubService.getHelloWorld()
    .success(function (data) {
        console.log(data);
        $scope.hello = data.content;
    })
    .error(function (error) {
        $scope.hello = 'Unable to load data: ' + error;
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
      $scope.events = 'Unable to load events: ' + error;
    });
  }
}]);

app.controller('ComsysController', ['$scope', 'ComsysStubService', function($scope, ComsysStubService) {

}]);

app.controller('MasterController', ['$scope', 'MasterStubService', function($scope, MasterStubService) {
  //TEST DATA
  $scope.username = 'master01@socom.com';
  $scope.password = 'master01';
  
  $scope.login = function() {
    
     MasterStubService.login($scope.username, $scope.password)
     .success(function (data) {
        console.log(data);
        $scope.loginResult = data.response;
    })
    .error(function (error) {
        $scope.loginResult = 'Unable to load data: ' + error;
    });
    
  }
}]);


app.controller('SuperAdminController', ['$scope', 'SuperAdminStubService', function($scope, SuperAdminStubService) {

}]);
