app.controller('ComsysController', function($scope, ComsysStubService) {

	$scope.getComsysPersonalConfig = function() { 
		ComsysStubService.getComsysPersonalConfig()
		.success(function (data) {
			console.log(data);
			$scope.getComsysPersonalConfigResult = data.response;
		})
		.error(function (error) {
			$scope.getComsysPersonalConfigResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.createComsys = function(username, password, nickname) {    
		ComsysStubService.createComsys(username, password, nickname)
		.success(function (data) {
			console.log(data);
			$scope.createComsysResult = data.response;
		})
		.error(function (error) {
			console.log(error);
			$scope.createComsysResult = 'Unable to load data: ' + error;
		});    
	};

	$scope.updateComsysPersonalConfig = function(nickname, display_grid, coord_format) {    
		ComsysStubService.updateComsysPersonalConfig(nickname, display_grid, coord_format)
		.success(function (data) {
			console.log(data);
			$scope.updateComsysPersonalConfigResult = data.response;
		})
		.error(function (error) {
			$scope.updateComsysPersonalConfigResult = 'Unable to load data: ' + error;
		});    
	};

	$scope.loginComsys = function(username, password) {
		ComsysStubService.loginComsys(username, password)
		.success(function (data) {
			console.log(data);
			$scope.loginComsysResult = data.response;
		})
		.error(function (error) {
			$scope.loginComsysResult = 'Unable to load data: ' + error;
		});
	};

	$scope.loginCheckComsys = function() {
		ComsysStubService.loginCheckComsys()
		.success(function (data) {
			console.log(data);
			$scope.loginCheckComsysResult = data.response;
		})
		.error(function (error) {
			$scope.loginCheckComsysResult = 'Unable to load data: ' + error;
		});    
	};

	$scope.changeComsysPassword = function(oldPassword, newPassword) {
		ComsysStubService.changeComsysPassword(oldPassword, newPassword)
		.success(function (data) {
			console.log(data);
			$scope.changeComsysPasswordResult = data.response;
		})
		.error(function (error) {
			$scope.changeComsysPasswordResult = 'Unable to load data: ' + error;
		});
	};

	$scope.logout = function(){
		ComsysStubService.logoutComsys()
		.success(function (data) {
			console.log(data);
			$scope.logoutResult = data.response;
		})
		.error(function (error) {
			$scope.logoutResult = 'Unable to load data: ' + error;
		});
	};

	$scope.sendNotificationToOperator = function(IDEvent, IDFaction, IDOperator, available_responses_list, responses_list, sender, text) {
	ComsysStubService.sendNotificationToOperator(IDEvent, IDFaction, IDOperator, available_responses_list, responses_list, sender, text);
	} ;
	
	$scope.sendNotificationToSquad = function(IDEvent, IDFaction, IDSquad, available_responses_list, responses_list, sender, text) {
	ComsysStubService.sendNotificationToSquad(IDEvent, IDFaction, IDSquad, available_responses_list, responses_list, sender, text);
	} ;

$scope.addEnemyPing = function(IDEvent, IDFaction, available_responses_list, responses_list, sender, text) {
		var IDEvent = 10;
		var IDFaction = 1;
		var IDSquad = 1;
		var available_responses_list = ["Yes", "No"];
var 				responses_list = ["Yes", "Yes", "Yes", "No"];
		var sender = "Cobra";
		var text = "Anybody alive?";
		
	ComsysStubService.addEnemyPing(IDEvent, IDFaction, available_responses_list, responses_list, sender, text);
	} ;
		
});
