app.controller('OperatorController', function($scope, OperatorStubService) {

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
	};

	$scope.getOperatorPersonalConfig = function(){
		OperatorStubService.getOperatorPersonalConfig()
		.success(function (data) {
			console.log(data);
			$scope.getOperatorPersonalConfigResult = data.response;
		})
		.error(function (error) {
			console.log(error);
			$scope.getOperatorPersonalConfigResult = 'Unable to load data: ' + error;
		});
	};

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
	};

	$scope.updateOperatorPersonalConfig = function(display_grid, coord_format, nickname, country, rank_ornumber, specialization_id) {
		OperatorStubService.updateOperatorPersonalConfig(display_grid, coord_format, nickname, country, rank_ornumber, specialization_id )
		.success(function (data) {
			console.log(data);
			$scope.updateOperatorPersonalConfigResult = data.response;
		})
		.error(function (error) {
			$scope.updateOperatorPersonalConfigResult = 'Unable to load data: ' + error;
		});   
	};

	$scope.operatorLogout = function() {
		OperatorStubService.operatorLogout()
		.success(function (data) {
			console.log(data);
			$scope.logoutResult = data.response;
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
	};

	$scope.createSquad = function(eventId, factionPIN) {
		OperatorStubService.createSquad(eventId, factionPIN)
		.success(function (data) {
			console.log(data);
			$scope.createSquadResult = data.response;
		})
		.error(function (error) {
			$scope.createSquadResult = 'Unable to load data: ' + error;
		});
	};

	$scope.deleteSquad = function(eventId, factionPIN) {
		OperatorStubService.deleteSquad(eventId, factionPIN)
		.success(function (data) {
			console.log(data);
			$scope.deleteSquadResult = data.response;
		})
		.error(function (error) {
			$scope.deleteSquadResult = 'Unable to load data: ' + error;
		});
	};

	$scope.lockFactionSquad = function(eventId, factionPIN) {
		OperatorStubService.lockFactionSquad(eventId, factionPIN)
		.success(function (data) {
			console.log(data);
			$scope.lockFactionSquadResult = data.response;
		})
		.error(function (error) {
			$scope.lockFactionSquadResult = 'Unable to load data: ' + error;
		});
	};

	$scope.unlockFactionSquad = function(eventId, factionPIN) {
		OperatorStubService.unlockFactionSquad(eventId, factionPIN)
		.success(function (data) {
			console.log(data);
			$scope.unlockFactionSquadResult = data.response;
		})
		.error(function (error) {
			$scope.unlockFactionSquadResult = 'Unable to load data: ' + error;
		});
	};

	$scope.kickOperatorFromFactionSquad = function(eventId, factionPIN, operatorId) {
		OperatorStubService.kickOperatorFromFactionSquad(eventId, factionPIN, operatorId)
		.success(function (data) {
			console.log(data);
			$scope.kickOperatorFromFactionSquadResult = data.response;
		})
		.error(function (error) {
			$scope.kickOperatorFromFactionSquadResult = 'Unable to load data: ' + error;
		});
	};

	$scope.joinFactionSquad = function(eventId, factionPIN, squadId) {
		OperatorStubService.joinFactionSquad(eventId, factionPIN, squadId)
		.success(function (data) {
			console.log(data);
			$scope.joinFactionSquadResult = data.response;
		})
		.error(function (error) {
			$scope.joinFactionSquadResult = 'Unable to load data: ' + error;
		});
	};

	$scope.leaveFactionSquad = function(eventId, factionPIN, squadId) {
		OperatorStubService.leaveFactionSquad(eventId, factionPIN, squadId)
		.success(function (data) {
			console.log(data);
			$scope.leaveFactionSquadResult = data.response;
		})
		.error(function (error) {
			$scope.leaveFactionSquadResult = 'Unable to load data: ' + error;
		});
	};

	$scope.sendNotificationToSquad = function (IDEvent, IDFaction, IDSquad, available_responses_list, responses_list, sender, text) {
		
		var IDEvent = 1;
		var IDFaction = 1;
		var IDSquad = 1;
		var available_responses_list = ["Devil", "Satan"];
		var responses_list = ["Devil", "Devil", "Devil", "Satan"];
		var sender = "Lucifer";
		var text = "Is your soul for sale?";
		OperatorStubService.sendNotificationToSquad(IDEvent, IDFaction, IDSquad, available_responses_list, responses_list, sender, text);
	};

});
