app.controller('ComsysController', function ($scope, ComsysStubService) {

	$scope.getComsysPersonalConfig = function () {
		ComsysStubService.getComsysPersonalConfig()
			.success(function (data) {
			console.log(data);
			$scope.getComsysPersonalConfigResult = data.response;
		})
			.error(function (error) {
			$scope.getComsysPersonalConfigResult = 'Unable to load data: ' + error;
		});
	};

	$scope.createComsys = function (username, password, nickname) {
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

	$scope.updateComsysPersonalConfig = function (nickname, display_grid, coord_format) {
		ComsysStubService.updateComsysPersonalConfig(nickname, display_grid, coord_format)
			.success(function (data) {
			console.log(data);
			$scope.updateComsysPersonalConfigResult = data.response;
		})
			.error(function (error) {
			$scope.updateComsysPersonalConfigResult = 'Unable to load data: ' + error;
		});
	};

	$scope.loginComsys = function (username, password) {
		ComsysStubService.loginComsys(username, password)
			.success(function (data) {
			console.log(data);
			$scope.loginComsysResult = data.response;
		})
			.error(function (error) {
			$scope.loginComsysResult = 'Unable to load data: ' + error;
		});
	};

	$scope.loginCheckComsys = function () {
		ComsysStubService.loginCheckComsys()
			.success(function (data) {
			console.log(data);
			$scope.loginCheckComsysResult = data.response;
		})
			.error(function (error) {
			$scope.loginCheckComsysResult = 'Unable to load data: ' + error;
		});
	};

	$scope.changeComsysPassword = function (oldPassword, newPassword) {
		ComsysStubService.changeComsysPassword(oldPassword, newPassword)
			.success(function (data) {
			console.log(data);
			$scope.changeComsysPasswordResult = data.response;
		})
			.error(function (error) {
			$scope.changeComsysPasswordResult = 'Unable to load data: ' + error;
		});
	};

	$scope.logout = function () {
		ComsysStubService.logoutComsys()
			.success(function (data) {
			console.log(data);
			$scope.logoutResult = data.response;
		})
			.error(function (error) {
			$scope.logoutResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getEventsOfComsys = function () {
		ComsysStubService.getEventsOfComsys()
			.success(function (data) {
			console.log(data);
			$scope.getEventsOfComsysResult = data.response;
		})
			.error(function (error) {
			$scope.getEventsOfComsysResult = 'Unable to load data: ' + error;
		});
	},

	$scope.sendNotificationToOperator = function (eventId, factionId, operatorId, available_responses_list, responses_list, sender, text) {
		ComsysStubService.sendNotificationToOperator(eventId, factionId, operatorId, available_responses_list, responses_list, sender, text);
	};

	$scope.sendNotificationToSquad = function (eventId, factionId, squadId, available_responses_list, responses_list, sender, text) {
		ComsysStubService.sendNotificationToSquad(eventId, factionId, squadId, available_responses_list, responses_list, sender, text);
	};

	$scope.addEnemyPing = function (eventId, factionId, available_responses_list, responses_list, sender, text) {
		ComsysStubService.addEnemyPing(eventId, factionId, available_responses_list, responses_list, sender, text);
	};

	$scope.sendNotificationToComsys = function (eventId, factionId, comsysId, available_responses_list, responses_list, sender, text) {
		ComsysStubService.sendNotificationToComsys(eventId, factionId, comsysId, available_responses_list, responses_list, sender, text);
	};

	$scope.sendNotificationToFaction = function (eventId, factionId, available_responses_list, responses_list, sender, text) {
		ComsysStubService.sendNotificationToFaction(eventId, factionId, available_responses_list, responses_list, sender, text);
	};

	$scope.sendTimestamp = function(eventId, factionId, comsysId){
		ComsysStubService.sendTimestamp(eventId, factionId, comsysId);
	};

	$scope.getComsysAllowedNotifReceiver = function(){
		var eventId = 10;
		var factionId = 1;
		var comsysId = 1;
		var resultArray;
		ComsysStubService.getComsysAllowedNotifReceiver(eventId, factionId, comsysId, function(array){
			resultArray = array;
			console.log(resultArray);
			$scope.$apply(function () {
				$scope.comsysReceiver = array[0].name;
	        });
		});
	};

});
