app.factory('ComsysStubService', function ($http) {

	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';
	var firebaseUrl = 'https://socom-bo-estg-2015.firebaseio.com/events_in_progress/';

	var requestPost =
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
		};

	$http.defaults.withCredentials = true;

	function escapeIfNotNull(variable) {

		if (variable != null) {
			return escape(variable);
		}

		return null;
	}

	return {
		
		/***** Laravel Services *****/

		logoutComsys: function () {
			return $http.get(baseUrl + 'comsys/logout/');
		},

		getComsysPersonalConfig: function () {
			return $http.get(baseUrl + 'comsys/config/personal/get');
		},

		createComsys: function (username, password, nickname) {
			requestPost.url = baseUrl + 'comsys/create';
			requestPost.params = { username: escapeIfNotNull(username), password: escapeIfNotNull(password), nickname: escapeIfNotNull(nickname) };
			return $http(requestPost);
		},

		updateComsysPersonalConfig: function (nickname, displayGrid, coordFormat) {
			requestPost.url = baseUrl + 'comsys/config/personal/update';
			requestPost.params = { nickname: escapeIfNotNull(nickname), display_grid: escapeIfNotNull(displayGrid), coord_format: escapeIfNotNull(coordFormat) };
			return $http(requestPost);
		},

		loginComsys: function (username, password) {
			requestPost.url = baseUrl + 'comsys/login';
			requestPost.params = { username: escapeIfNotNull(username), password: escapeIfNotNull(password) };
			return $http(requestPost);
		},

		loginCheckComsys: function () {
			return $http.get(baseUrl + 'comsys/login/check');
		},

		logoutComsys: function () {
			return $http.get(baseUrl + 'comsys/logout');
		},

		changeComsysPassword: function (oldPassword, newPassword) {
			requestPost.url = baseUrl + 'comsys/password/update';
			requestPost.params = { old: escapeIfNotNull(oldPassword), new: escapeIfNotNull(newPassword) };
			return $http(requestPost);
		},

		/***** Firebase Services *****/

		sendNotificationToOperator: function (eventId, factionId, operatorId, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase('https://socom-bo-estg-2015.firebaseio.com/events_in_progress/' + eventId + '/factions/' + factionId + '/operators/' + operatorId + '/operator_notifications/');
			ref.push({
				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
		},

		sendNotificationToSquad: function (eventId, factionId, squadId, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase('https://socom-bo-estg-2015.firebaseio.com/events_in_progress/' + eventId + '/factions/' + factionId + '/squads/' + squadId + '/squad_notifications/');
			ref.push({
				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
		},

		sendNotificationToComsys: function (eventId, factionId, comsysId, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/comsys_users/' + comsysId + '/comsys_notifications/');
			ref.push({
				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
		},

		addEnemyPing: function (eventId, factionId, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase('https://socom-bo-estg-2015.firebaseio.com/events_in_progress/' + eventId + '/factions/' + factionId + '/special_actions/');
			ref.push({
				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
		},

		sendNotificationToFaction: function (eventId, factionId, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/faction_notifications/');
			ref.push({
				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
		}

	};
});