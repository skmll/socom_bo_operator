app.controller('SuperAdminController', function ($scope, SuperAdminStubService) {

	$scope.loginSuperadmin = function (username, password) {
		SuperAdminStubService.loginSuperadmin(username, password)
			.success(function (data) {
			console.log(data);
			$scope.loginSuperadminResult = data.response;
			if (data.response > 0) $scope.loginSuperadminClass = "green";
			else if (data.response == 0) $scope.loginSuperadminClass = "blue";
			else $scope.loginSuperadminClass = "red";
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
			if (data.response > 0) $scope.loginCheckSuperadminClass = "green";
			else if (data.response == 0) $scope.loginCheckSuperadminClass = "blue";
			else $scope.loginCheckSuperadminClass = "red";
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
			if (data.response > 0) $scope.logoutSuperadminClass = "green";
			else if (data.response == 0) $scope.logoutSuperadminClass = "blue";
			else $scope.logoutSuperadminClass = "red";
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
			if (data.response > 0) $scope.changeMasterPasswordClass = "green";
			else if (data.response == 0) $scope.changeMasterPasswordClass = "blue";
			else $scope.changeMasterPasswordClass = "red";
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
			if (data.response > 0) $scope.acceptMasterRegistrationClass = "green";
			else if (data.response == 0) $scope.acceptMasterRegistrationClass = "blue";
			else $scope.acceptMasterRegistrationClass = "red";
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
			if (data.response > 0) $scope.refuseMasterRegistrationClass = "green";
			else if (data.response == 0) $scope.refuseMasterRegistrationClass = "blue";
			else $scope.refuseMasterRegistrationClass = "red";
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
			if (data.response > 0) $scope.banMasterClass = "green";
			else if (data.response == 0) $scope.banMasterClass = "blue";
			else $scope.banMasterClass = "red";
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
			if (data.response > 0) $scope.getAllMastersClass = "green";
			else if (data.response == 0) $scope.getAllMastersClass = "blue";
			else $scope.getAllMastersClass = "red";
		})
			.error(function (error) {
			$scope.getAllMastersResult = 'Unable to load data: ' + error;
		});
	};

});