app.controller('SuperAdminController', function($scope, SuperAdminStubService) {

	$scope.loginSuperadmin = function(username, password) {  
		SuperAdminStubService.loginSuperadmin(username, password)
		.success(function (data, status, headers, config) {
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
	};

	$scope.changeMasterPassword = function(oldPassword, newPassword) {
		SuperAdminStubService.changeMasterPassword(oldPassword, newPassword)
		.success(function (data) {
			console.log(data);
			$scope.changeMasterPasswordResult = data.response;
		})
		.error(function (error) {
			$scope.changeMasterPasswordResult = 'Unable to load data: ' + error;
		});
	};

	$scope.loginCheckSuperadmin = function() {
		SuperAdminStubService.loginCheckSuperadmin()
		.success(function(data) {
			console.log(data);
			$scope.loginCheckResult = data.response;
		})
		.error(function(error) {
			$scope.loginCheckResult = 'Unable to load data: ' + error;
		});
	};

	$scope.acceptMasterRegistration = function(masterId) {    
		SuperAdminStubService.acceptMasterRegistration(masterId)
		.success(function (data) {
			console.log(data);
			$scope.acceptMasterRegistrationResult = data.response;
		})
		.error(function (error) {
			$scope.acceptMasterRegistrationResult = 'Unable to load data: ' + error;
		});
	};

	$scope.refuseMasterRegistration = function(masterAccountId) {
		SuperAdminStubService.refuseMasterRegistration(masterAccountId)
		.success(function(data) {
			console.log(data);
			$scope.refuseMasterRegistrationResult = data.response;
		})
		.error(function(error) {
			$scope.refuseMasterRegistrationResult = 'Unable to load data: ' + error;
		});
	};

	$scope.banMaster = function(masterAccountId) {
		SuperAdminStubService.banMaster(masterAccountId)
		.success(function(data) {
			console.log(data);
			$scope.banMasterResult = data.response;
		})
		.error(function(error) {
			$scope.banMasterResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllMasters = function() {
		SuperAdminStubService.getAllMasters()
		.success(function (data) {
			console.log(data);
			$scope.getAllMastersResult = data.response;
		})
		.error(function (error) {
			$scope.getAllMastersResult = 'Unable to load data: ' + error;
		});
	};

});
