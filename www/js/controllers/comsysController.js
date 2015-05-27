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

	$scope.sendNotificationToComsys = function (IDEvent, IDFaction, IDComsys, available_responses_list, responses_list, sender, text) {
		/*
		IDEvent = 1;
		IDFaction = 1;
		IDComsys = 1;
		available_responses_list = ["Devil", "Satan"];
		responses_list = ["Devil", "Devil", "Devil", "Satan"];
		sender = "Lucifer";
		text = "Is your soul for sale?";
		*/
		ComsysStubService.sendNotificationToComsys(IDEvent, IDFaction, IDComsys, available_responses_list, responses_list, sender, text);
	};

	$scope.sendNotificationToFaction = function (IDEvent, IDFaction, available_responses_list, responses_list, sender, text) {
		/*
		IDEvent = 1;
		IDFaction = 1;
		available_responses_list = ["Devil", "Satan"];
		responses_list = ["Devil", "Devil", "Devil", "Satan"];
		sender = "Lucifer";
		text = "Is your soul for sale?";
		*/
		ComsysStubService.sendNotificationToFaction(IDEvent, IDFaction, available_responses_list, responses_list, sender, text);
	};

});
