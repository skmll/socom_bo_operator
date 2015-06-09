app.controller('SuperAdminController', function ($scope, SuperAdminStubService, $parse) {

	$scope.loginSuperadmin = function (username, password) {
		SuperAdminStubService.loginSuperadmin(username, password)
			.success(function (data) {
			$scope.setResult(data, $parse('loginSuperadminResult'), $parse('loginSuperadminClass'));
		})
			.error(function (error) {
			$scope.loginSuperadminResult = 'Unable to load data: ' + error;
		});
	};

	$scope.loginCheckSuperadmin = function () {
		SuperAdminStubService.loginCheckSuperadmin()
			.success(function (data) {
			$scope.setResult(data, $parse('loginCheckSuperadminResult'), $parse('loginCheckSuperadminClass'));
		})
			.error(function (error) {
			$scope.loginCheckSuperadminResult = 'Unable to load data: ' + error;
		});
	};

	$scope.logoutSuperadmin = function () {
		SuperAdminStubService.logoutSuperadmin()
			.success(function (data) {
			$scope.setResult(data, $parse('logoutSuperadminResult'), $parse('logoutSuperadminClass'));
		})
			.error(function (error) {
			$scope.logoutSuperadminResult = 'Unable to load data: ' + error;
		});
	};

	$scope.changeMasterPassword = function (oldPassword, newPassword) {
		SuperAdminStubService.changeMasterPassword(oldPassword, newPassword)
			.success(function (data) {
			$scope.setResult(data, $parse('changeMasterPasswordResult'), $parse('changeMasterPasswordClass'));
		})
			.error(function (error) {
			$scope.changeMasterPasswordResult = 'Unable to load data: ' + error;
		});
	};

	$scope.acceptMasterRegistration = function (masterId) {
		SuperAdminStubService.acceptMasterRegistration(masterId)
			.success(function (data) {
			$scope.setResult(data, $parse('acceptMasterRegistrationResult'), $parse('acceptMasterRegistrationClass'));
		})
			.error(function (error) {
			$scope.acceptMasterRegistrationResult = 'Unable to load data: ' + error;
		});
	};

	$scope.refuseMasterRegistration = function (masterId) {
		SuperAdminStubService.refuseMasterRegistration(masterId)
			.success(function (data) {
			$scope.setResult(data, $parse('refuseMasterRegistrationResult'), $parse('refuseMasterRegistrationClass'));
		})
			.error(function (error) {
			$scope.refuseMasterRegistrationResult = 'Unable to load data: ' + error;
		});
	};

	$scope.banMaster = function (masterId) {
		SuperAdminStubService.banMaster(masterId)
			.success(function (data) {
			$scope.setResult(data, $parse('banMasterResult'), $parse('banMasterClass'));
		})
			.error(function (error) {
			$scope.banMasterResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllMasters = function () {
		SuperAdminStubService.getAllMasters()
			.success(function (data) {
			$scope.setResult(data, $parse('getAllMastersResult'), $parse('getAllMastersClass'));
		})
			.error(function (error) {
			$scope.getAllMastersResult = 'Unable to load data: ' + error;
		});
	};

	$scope.setResult = function(data, result, element) {
		console.log(data);
		result.assign($scope, data.response);
		if (data.response > 0) element.assign($scope, "green");
		else if (data.response == 0) element.assign($scope, "blue");
		else element.assign($scope, "red");
	};
	
});