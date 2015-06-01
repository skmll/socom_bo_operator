app.controller('SuperAdminController', function ($scope, SuperAdminStubService) {

	$scope.loginSuperadmin = function (username, password) {
		SuperAdminStubService.loginSuperadmin(username, password)
			.success(function (data) {
			console.log(data);
			$scope.loginSuperadminResult = data.response;
		})
			.error(function (error) {
			$scope.loginSuperadminResult = 'Unable to load data: ' + error;
		});
	};

	$scope.loginCheckSuperadmin = function () {
		SuperAdminStubService.loginCheckSuperadmin()
			.success(function (data) {
			console.log(data);
			$scope.loginCheckSuperadminResult = data.response;
		})
			.error(function (error) {
			$scope.loginCheckSuperadminResult = 'Unable to load data: ' + error;
		});
	};

	$scope.logoutSuperadmin = function () {
		SuperAdminStubService.logoutSuperadmin()
			.success(function (data) {
			console.log(data);
			$scope.logoutSuperadminResult = data.response;
		})
			.error(function (error) {
			$scope.logoutSuperadminResult = 'Unable to load data: ' + error;
		});
	};

	$scope.changeMasterPassword = function (oldPassword, newPassword) {
		SuperAdminStubService.changeMasterPassword(oldPassword, newPassword)
			.success(function (data) {
			console.log(data);
			$scope.changeMasterPasswordResult = data.response;
		})
			.error(function (error) {
			$scope.changeMasterPasswordResult = 'Unable to load data: ' + error;
		});
	};

	$scope.acceptMasterRegistration = function (masterId) {
		SuperAdminStubService.acceptMasterRegistration(masterId)
			.success(function (data) {
			console.log(data);
			$scope.acceptMasterRegistrationResult = data.response;
		})
			.error(function (error) {
			$scope.acceptMasterRegistrationResult = 'Unable to load data: ' + error;
		});
	};

	$scope.refuseMasterRegistration = function (masterId) {
		SuperAdminStubService.refuseMasterRegistration(masterId)
			.success(function (data) {
			console.log(data);
			$scope.refuseMasterRegistrationResult = data.response;
		})
			.error(function (error) {
			$scope.refuseMasterRegistrationResult = 'Unable to load data: ' + error;
		});
	};

	$scope.banMaster = function (masterId) {
		SuperAdminStubService.banMaster(masterId)
			.success(function (data) {
			console.log(data);
			$scope.banMasterResult = data.response;
		})
			.error(function (error) {
			$scope.banMasterResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllMasters = function () {
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