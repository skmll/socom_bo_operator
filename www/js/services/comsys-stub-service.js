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
			return variable;
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

		getEventsOfComsys: function () {
			return $http.get(baseUrl + 'comsys/event/get/all');
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

		sendTimestamp: function (eventId, factionId, comsysId) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/comsys_users/' + comsysId);
			ref.update({
				timestamp: Firebase.ServerValue.TIMESTAMP
			});
		},

		getComsysAllowedNotifReceiver: function (eventId, factionId, comsysId, callback) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/operators/');
			var squadRef = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/squads/');
			var comsysRef = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/comsys_users/');
			var factionRef = new Firebase(firebaseUrl + eventId + '/factions/' + factionId);
			var operators;
			var squads;
			var faction;
			var allowedNotifReceivers = [];
			var squadId;
			var comsys;

			ref.once("value", function(snapshot) {
				operators = snapshot.val();
				for (var id in operators) {
					allowedNotifReceivers.push({id: id, name: operators[id].nickname, type: 'operator'});
				};

				squadRef.once("value", function(snapshot) {
				squads = snapshot.val();

					for (var id in squads) {
						allowedNotifReceivers.push({id: id, name: squads[id].tag, type: 'squad'});
					};

					comsysRef.once("value", function(snapshot) {
						comsys = snapshot.val();
						for (var id in comsys) {
							if(id != comsysId){
								allowedNotifReceivers.push({id: id, name: comsys[id].nickname, type: 'comsys'});
							}
						};

						factionRef.once("value", function(snapshot) {
							faction = snapshot.val();
							allowedNotifReceivers.push({id: factionId, name: faction.name, type: 'faction'});

							callback(allowedNotifReceivers);
							
					    }, function (errorObject) {
					      console.log("The read failed: " + errorObject.code);
					    });
						
				    }, function (errorObject) {
				      console.log("The read failed: " + errorObject.code);
				    });

					
			    }, function (errorObject) {
			      console.log("The read failed: " + errorObject.code);
			    });

		    }, function (errorObject) {
		      console.log("The read failed: " + errorObject.code);
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