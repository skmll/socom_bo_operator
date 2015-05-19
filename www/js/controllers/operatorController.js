app.controller('OperatorController', ['$scope', 'OperatorStubService', function($scope, OperatorStubService) {

	$scope.createOperator = function (username, password, nickname, country, rank_ornumber, specialization_id) {
		OperatorStubService.createOperator(username, password, nickname, country, rank_ornumber, specialization_id)
		.success(function(data) {
			console.log(data);
			$scope.createOperatorResult = data.response;
		})
		.error(function(error) {
			console.log(error);
			$scope.createOperatorResult = 'Error: ' + error.message;
		});
	}

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

	$scope.loginOperator = function(username, password) {    
		OperatorStubService.loginOperator(username, password)
		.success(function (data) {
			console.log(data);
			$scope.loginResult = data.response;
		})
		.error(function (error) {
			$scope.loginResult = 'Unable to load data: ' + error;
		});    
	};

	$scope.loginCheckOperator = function(){
		OperatorStubService.loginCheckOperator()
		.success(function (data) {
			console.log(data);
			$scope.loginCheckOperatorResult = data.response;
		})
		.error(function (error) {
			$scope.loginCheckOperatorResult = 'Unable to load data: ' + error;
		});
	}

	$scope.updateOperatorPersonalConfig = function(display_grid, coord_format, nickname, country, rank_ornumber, specialization_id) {
		OperatorStubService.updateOperatorPersonalConfig(display_grid, coord_format, nickname, country, rank_ornumber, specialization_id )
		.success(function (data) {
			console.log(data);
			$scope.updateOperatorPersonalConfigResult = data.response;
		})
		.error(function (error) {
			$scope.updateOperatorPersonalConfigResult = 'Unable to load data: ' + error;
		});   
	}

	$scope.operatorLogout = function() {
		OperatorStubService.operatorLogout()
		.success(function (data) {
			console.log(data);
			$scope.logoutResult = reponse;
		})
		.error(function (error) {
			$scope.logoutResult = 'Unable to load data: ' + error;
		});
	};

	$scope.changeOperatorPassword = function(oldPassword, newPassword) {
		OperatorStubService.changeOperatorPassword(oldPassword, newPassword)
		.success(function (data) {
			console.log(data);
			$scope.changeOperatorPasswordResult = data.response;
		})
		.error(function (error) {
			$scope.changeOperatorPasswordResult = 'Unable to load data: ' + error;
		});
	}

}]);
