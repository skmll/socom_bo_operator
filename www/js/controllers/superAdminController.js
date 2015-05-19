app.controller('SuperAdminController', ['$scope', 'SuperAdminStubService', function($scope, SuperAdminStubService) {

	$scope.loginSuperadmin = function(username, password) {  
		SuperAdminStubService.loginSuperadmin(username, password)
		.success(function (data) {
			console.log(data);
			$scope.loginSuperadminResult = data.response;
		})
		.error(function (error) {
			$scope.loginSuperadminResult = 'Unable to load data: ' + error;
		});
	};

	$scope.logout = function() {
		SuperAdminStubService.logout()
		.success(function (data) {
			console.log(data);
			$scope.logoutResult = data.response;
		})
		.error(function (error) {
			$scope.logoutResult = 'Unable to load data: ' + error;
		});
	}

	$scope.changeMasterPassword = function(oldPassword, newPassword) {
		SuperAdminStubService.changeMasterPassword(oldPassword, newPassword)
		.success(function (data) {
			console.log(data);
			$scope.changeMasterPasswordResult = data.response;
		})
		.error(function (error) {
			$scope.changeMasterPasswordResult = 'Unable to load data: ' + error;
		});
	}

	$scope.loginCheckSuperadmin = function() {
		SuperAdminStubService.loginCheckSuperadmin()
		.success(function(data) {
			console.log(data);
			$scope.loginCheckResult = data.response;
		})
		.error(function(error) {
			$scope.loginCheckResult = 'Unable to load data: ' + error;
		});
	}

	$scope.acceptMasterRegistration = function(masterID) {    
		SuperAdminStubService.acceptMasterRegistration(masterID)
		.success(function (data) {
			console.log(data);
			$scope.loginResult = data.response;
		})
		.error(function (error) {
			$scope.loginResult = 'Unable to load data: ' + error;
		});
	};

	$scope.refuseMasterRegistration = function(masterAccount) {
		SuperAdminStubService.refuseMasterRegistration(masterAccount)
		.success(function(data) {
			console.log(data);
			$scope.refuseResult = data.response;
		})
		.error(function(error) {
			$scope.refuseResult = 'Unable to load data: ' + error;
		});
	}

	$scope.banMaster = function(masterAccount) {
		SuperAdminStubService.banMaster(masterAccount)
		.success(function(data) {
			console.log(data);
			$scope.banMasterResult = data.response;
		})
		.error(function(error) {
			$scope.banMasterResult = 'Unable to load data: ' + error;
		});
	}

	$scope.getAllMasters = function() {
		SuperAdminStubService.getAllMasters()
		.success(function (data) {
			console.log(data);
			$scope.loginResult = data.response;
		})
		.error(function (error) {
			$scope.loginResult = 'Unable to load data: ' + error;
		});
	}

}]);
