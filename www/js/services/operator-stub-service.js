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

	return {
		
		createOperator: function(username, password, nickname, country, rank_ornumber, specialization_id) {
			requestPost.url = baseUrl + 'operator/create';
			requestPost.params = {username: escape(username), password: escape(password), nickname: escape(nickname), country: escape(country), rank_ornumber: escape(rank_ornumber), specialization_id: escape(specialization_id) }; 
			return $http(requestPost);
		},

		getOperatorPersonalConfig: function(){
			var url = baseUrl + 'operator/config/personal/get';
			return $http.get(url);
		},

		loginOperator: function (username, password) {
			requestPost.url = baseUrl + 'operator/login';
			requestPost.params = { username: escape(username), password: escape(password) };
			return $http(requestPost);
		},

		loginCheckOperator: function () {
			return $http.get(baseUrl + 'operator/login/check');
		},

		updateOperatorPersonalConfig: function (display_grid, coord_format,nickname, country,
				rank_ornumber, specialization_id) {
			requestPost.url = baseUrl + 'operator/config/personal/update';
			requestPost.params = { display_grid: escape(display_grid), coord_format: escape(coord_format),
					nickname: escape(nickname),rank_ornumber: escape(rank_ornumber),specialization_id: escape(specialization_id) };
			return $http(requestPost);
		},

		operatorLogout: function () {
			return $http.get(baseUrl + 'operator/logout');
		},

		changeOperatorPassword: function (oldPassword, newPassword) {
			requestPost.url = baseUrl + 'operator/password/update';
			requestPost.params = { old: escape(oldPassword), new: escape(newPassword) };
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

		sendNotificationToOperator: function(eventId, factionId, operatorId, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/operators/' + operatorId + '/');
			var postsRef = ref.child("operator_notifications/");
			var newPostRef = postsRef.push({
				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
		},

		addPing: function(eventId, factionId, squadId, action, gps_lat, gps_lng) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/squads/' + squadId + '/');
			var postsRef = ref.child("pings/");
			var newPostRef = postsRef.push({
				action: action,
				gps_lat: gps_lat,
				gps_lng: gps_lng,
				timestamp: 'TODO: TIMESTAMP'
			});
		},

		updateLocation: function(eventId, factionId, operatorId, gps_lng, gps_lat, battery) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/operators/' + operatorId + '/');
			ref.update({
				battery: battery,
				gps_lat: gps_lat,
				gps_lng: gps_lng,
				timestamp: 'TODO: TIMESTAMP'
			});
		}
		
	};
});
