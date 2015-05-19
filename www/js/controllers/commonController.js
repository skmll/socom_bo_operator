
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
