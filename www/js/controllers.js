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
    
    $scope.getOperatorPersonalConfig = function(){
        OperatorStubService.getOperatorPersonalConfig()
        .success(function (data) {
            console.log(data);
            $scope.getOperatorPersonalConfigResult = data.responset;
        })
        .error(function (error) {
            $scope.getOperatorPersonalConfigResult = 'Unable to load data: ' + error;
        });
    }
}]);

app.controller('CommonController', ['$scope', 'CommonStubService', function($scope, CommonStubService) {
	
}]);

app.controller('ComsysController', ['$scope', 'ComsysStubService', function($scope, ComsysStubService) {
    $scope.logout = function(){
        ComsysStubService.logoutComsys()
        .success(function (data) {
            console.log(data);
            $scope.logoutResult = data.response;
        })
        .error(function (error) {
            $scope.logoutResult = 'Unable to load data: ' + error;
        });
    }
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
  
  $scope.loginCheck = function() {
    
     MasterStubService.loginCheckMaster()
     .success(function (data) {
        console.log(data);
        $scope.loginCheckResult = data.response;
    })
    .error(function (error) {
        $scope.loginCheckResult = 'Unable to load data: ' + error;
    });
  }
  
    $scope.logout = function() {
    
     MasterStubService.logoutMaster()
     .success(function (data) {
        console.log(data);
        $scope.logoutResult = data.response;
    })
    .error(function (error) {
        $scope.logoutResult = 'Unable to load data: ' + error;
    });
  }
  
  $scope.updateMasterConfig = function() {
      MasterStubService.updateMasterPersonalConfig('display_grid', 'coord_format', 'nickname', 'logo', 
			'phone', 'address', 'zipcode', 'country', 'association_description', 'association_link', 'association_link_promo')
     .success(function (data) {
        console.log(data);
        $scope.updateMasterConfigResult = data.response;
    })
    .error(function (error) {
        $scope.updateMasterConfigResult = 'Unable to load data: ' + error;
    });
  }
  
  $scope.getAllMastSponsors = function(){
      MasterStubService.getAllMasterSponsors()
      .success(function (data) {
        console.log(data);
        $scope.getAllMasterSponsorsResult = data.response;
    })
    .error(function (error) {
        $scope.getAllMasterSponsorsResult = 'Unable to load data: ' + error;
    });
  }
}]);


app.controller('SuperAdminController', ['$scope', 'SuperAdminStubService', function($scope, SuperAdminStubService) {
    var oldPassword = '';
    var newPassword = '';
    $scope.changeMasterPassword = function(){
        SuperAdminStubService.changeMasterPassword(oldPassword, newPassword)
        .success(function (data) {
            console.log(data);
            $scope.changeMasterPasswordResult = data.response;
        })
        .error(function (error) {
            $scope.changeMasterPasswordResult = 'Unable to load data: ' + error;
        });
    }
}]);
