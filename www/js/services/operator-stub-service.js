app.factory('OperatorStubService', function ($http) {

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

	function escapeIfNotNull(variable){
		if(variable != null){
			return variable;
		}
		return null;
	} 


	return {
		
		createOperator: function(username, password, nickname, country, rank_ornumber, specialization_id) {
			requestPost.url = baseUrl + 'operator/create';
			requestPost.params = {username: escapeIfNotNull(username), password: escapeIfNotNull(password), nickname: escapeIfNotNull(nickname), country: escapeIfNotNull(country), rank_ornumber: escapeIfNotNull(rank_ornumber), specialization_id: escapeIfNotNull(specialization_id) }; 
			return $http(requestPost);
		},

		getOperatorPersonalConfig: function(){
			var url = baseUrl + 'operator/config/personal/get';
			return $http.get(url);
		},

		loginOperator: function (username, password) {
			requestPost.url = baseUrl + 'operator/login';
			requestPost.params = { username: escapeIfNotNull(username), password: escapeIfNotNull(password) };
			return $http(requestPost);
		},

		loginCheckOperator: function () {
			return $http.get(baseUrl + 'operator/login/check');
		},

		updateOperatorPersonalConfig: function (display_grid, coord_format,nickname, country,
			rank_ornumber, specialization_id) {
			requestPost.url = baseUrl + 'operator/config/personal/update';
			requestPost.params = { display_grid: escapeIfNotNull(display_grid), coord_format: escapeIfNotNull(coord_format),
				nickname: escapeIfNotNull(nickname), country: escapeIfNotNull(country), rank_ornumber: escapeIfNotNull(rank_ornumber),specialization_id: escapeIfNotNull(specialization_id) };
				return $http(requestPost);
			},

			operatorLogout: function () {
				return $http.get(baseUrl + 'operator/logout');
			},

			changeOperatorPassword: function (oldPassword, newPassword) {
				requestPost.url = baseUrl + 'operator/password/update';
				requestPost.params = { old: escapeIfNotNull(oldPassword), new: escapeIfNotNull(newPassword) };
				return $http(requestPost);
			},

			createSquad: function (eventId, factionPIN) {
				return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/squad/create');
			},

			deleteSquad: function (eventId, factionPIN) {
				return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/squad/delete');
			},

			lockFactionSquad: function (eventId, factionPIN) {
				return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/squad/lock');
			},

			unlockFactionSquad: function (eventId, factionPIN) {
				return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/squad/unlock');
			},

			kickOperatorFromFactionSquad: function (eventId, factionPIN, operatorId) {
				return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/squad/kick/' + operatorId);
			},

			joinFactionSquad: function (eventId, factionPIN, squadId) {
				return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/squad/join/' + squadId);
			},

			leaveFactionSquad: function (eventId, factionPIN, squadId) {
				return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/squad/leave/' + squadId);
			},

			getEventsOfOperator: function () {
				return $http.get(baseUrl + 'operator/event/get/all');
			},

			changeStatus: function(eventId, factionId, operatorId, status){
				var ref = new Firebase('https://socom-bo-estg-2015.firebaseio.com/events_in_progress/' + eventId + '/factions/' + factionId + '/operators/'+operatorId+'/'+status);
				ref.update({
					status: status
				});
			},

		// Firebase Services
		sendNotificationToOperator: function(eventId, factionId, operatorId, available_responses_list, sender, text) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/operators/' + operatorId + '/');
			var postsRef = ref.child("operator_notifications/");
			var newPostRef = postsRef.push({
				available_responses_list: available_responses_list,
				sender: sender,
				text: text,
				timestamp: Firebase.ServerValue.TIMESTAMP
			});
		},
		
		sendNotificationToSquad: function(eventId, factionId, squadId, available_responses_list, sender, text) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/squads/' + squadId + '/squad_notifications/');
			ref.push({
				available_responses_list: available_responses_list,
				sender: sender,
				text: text,
				timestamp: Firebase.ServerValue.TIMESTAMP
			});
		},

		sendNotificationToComsys: function(eventId, factionId, comsysId, available_responses_list, sender, text) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/comsys_users/' + comsysId + '/comsys_notifications/');
			ref.push({
				available_responses_list: available_responses_list,
				sender: sender,
				text: text,
				timestamp: Firebase.ServerValue.TIMESTAMP
			});
		},

		addPing: function(eventId, factionId, squadId, action, gps_lat, gps_lng, enemiesNumber, direction) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/squads/' + squadId + '/');
			var postsRef = ref.child("pings/");
			var newPostRef = postsRef.push({
				action: action,
				enemies_number: enemiesNumber,
				direction: direction,
				gps_lat: gps_lat,
				gps_lng: gps_lng,
				timestamp: Firebase.ServerValue.TIMESTAMP
			});
		},

		getOperatorAllowedNotifReceiver: function(eventId, factionId, operatorId, callback) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/operators/');
			var squadRef = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/squads/');
			var comsysRef = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/comsys_users/');
			var operators;
			var squads;
			var allowedNotifReceivers = [];
			var squadId;
			var comsys;

			ref.once("value", function(snapshot) {
				operators = snapshot.val();
				squadId = operators[operatorId].squad_id;
				for (var id in operators) {
					if(id != operatorId && (operators[id].squad_id == operators[operatorId].squad_id)){
						allowedNotifReceivers.push({id: id, name: operators[id].nickname, type: 'operator'});
					}
				};

				squadRef.once("value", function(snapshot) {
					squads = snapshot.val();

					for (var id in squads) {
						if(id == squadId){
							allowedNotifReceivers.push({id: id, name: 'Squad ' + squads[id].tag, type: 'squad'});
						}
					};

					comsysRef.once("value", function(snapshot) {
						comsys = snapshot.val();

						for (var id in comsys) {
							allowedNotifReceivers.push({id: id, name: comsys[id].nickname, type: 'comsys'});
						};
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
		},

		updateLocation: function(eventId, factionId, operatorId, gps_lng, gps_lat, battery) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/operators/' + operatorId);
			ref.update({
				battery: battery,
				gps_lat: gps_lat,
				gps_lng: gps_lng,
				timestamp: Firebase.ServerValue.TIMESTAMP
			});
		}, 

		viewSquad: function(eventId, factionId, operatorId, callback) {
			var ref = new Firebase(firebaseUrl + eventId + "/factions/" + factionId + "/operators/" + operatorId + "/");			
			ref.on("value", function(snapshot) {
				var operator = snapshot.val();
				var ref2 = new Firebase(firebaseUrl + eventId + "/factions/" + factionId + "/operators/");				
				ref2.once("value", function(snapshot2) {
					var operators = snapshot2.val();
					var squadOperatorId = [];
					for(idOperator in operators) {
						var ref3 = new Firebase(firebaseUrl + eventId + "/factions/" + factionId + "/operators/" + idOperator + "/");				
						ref3.once("value", function(snapshot3) {
							var operatorData = snapshot3.val();
							if(operator.squad_id == operatorData.squad_id) {
								squadOperatorId.push(idOperator);
							}
							callback(squadOperatorId);
						});
					}
				});
			});
		},

		onSquadPingAdded: function(eventId, factionId, squadId, callback) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/squads/' + squadId + '/pings/');	
			ref.on("child_added", function(snapshot, prevKey) {
				var ping = snapshot.val();	
				callback(ping);
			});
		},

		onComsysPingAdded: function(eventId, factionId, callback) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/special_actions/');
			ref.on("child_added", function(snapshot, prevKey) {
				var spAction = snapshot.val();
				if(spAction.action == "enemy"){
					callback(spAction);
				}
			});
		}

		};
});
