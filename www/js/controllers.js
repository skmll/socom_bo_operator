app.controller('OperatorController', ['$scope', 'OperatorStubService', function($scope, OperatorStubService) {
  $scope.operators = 'Loading data..';  
  var event = {
	IDEvent: '1',
	idSquadSession: '1'
};

  OperatorStubService.getHelloWorld()
    .success(function (data) {
        console.log(data);
        $scope.operators = data.content;
    })
    .error(function (error) {
        $scope.operators = 'Unable to load data: ' + error;
    });
	
	$scope.unlockSquadSession = function() {
	OperatorStubService.unlockSquadSession(event)
	.success(function(data) {
		console.log(data);
		$scope.unlockResult = data;
	})
	.error(function(error) {
		console.log(error);
		$scope.unlockResult = 'Unable to unlock the squad session ' + error;
	});
}

}]);

app.controller('CommonController', ['$scope', 'CommonStubService', function($scope, CommonStubService) {
	
	var event = {
		eventId: '1'
	};
	
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

  
	$scope.getEventById = function() {
	CommonStubService.getEvent(event)
	.success(function(data) {
		console.log(data);
		$scope.event = data;
	})
	.error(function(error) {
		console.log(error);
		$scope.event = 'Unable to get the event ' + error;
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
var event = {
	IDEvent: '1',
	IDMap: '1'
};

$scope.attachMapToEvent = function() {
	ComsysStubService.attachMapToEvent(event)
	.success(function(data) {
		console.log(data);
		$scope.attachMapResult = data;
	})
	.error(function(error) {
		console.log(error);
		$scope.attachMapResult = 'can not attach map to event ' + error;
	});
}
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
        $scope.loginResult = 'Unable to load data: ' + error;
    });
    
  }
}]);


app.controller('SuperAdminController', ['$scope', 'SuperAdminStubService', function($scope, SuperAdminStubService) {
var account = {
	IDPendingMasterAccount: '1'
};
  
  $scope.refuseGameMasterRegistration = function() {
    SuperAdminStubService.refuseGameMasterRegistration(account)
	.success(function(data) {
		console.log(data);
		$scope.refuseResult = data;
	})
	.error(function(error) {
		$scope.refuseResult = 'An error acurred ' + error;
	});
  }
  
}]);
