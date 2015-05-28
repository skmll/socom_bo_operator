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

	function escapeIfNotNull(variable){
		if(variable != null){
			return escape(variable);
		}
		return null;
	} 

	return {

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

		updateComsysPersonalConfig: function (nickname, display_grid, coord_format) {
			requestPost.url = baseUrl + 'comsys/config/personal/update';
			requestPost.params = { nickname: escapeIfNotNull(nickname), display_grid: escapeIfNotNull(display_grid), coord_format: escapeIfNotNull(coord_format) };
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

		
		sendNotificationToOperator: function(IDEvent, IDFaction, IDOperator, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase('https://socom-bo-estg-2015.firebaseio.com/events_in_progress/' + IDEvent + '/factions/' + IDFaction + '/operators/' + IDOperator + '/');
			var postsRef = ref.child("operator_notifications/");
			var newPostRef = postsRef.push({
				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
		},

		sendNotificationToSquad: function(IDEvent, IDFaction, IDSquad, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase('https://socom-bo-estg-2015.firebaseio.com/events_in_progress/' + IDEvent + '/factions/' + IDFaction + '/squads/' + IDSquad + '/');
			var postsRef = ref.child("squad_notifications/");
			var newPostRef = postsRef.push({
				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
		},


		// Firebase Services
		sendNotificationToComsys: function (IDEvent, IDFaction, IDComsys, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase(firebaseUrl + IDEvent + '/factions/' + IDFaction + '/comsys_users/' + IDComsys + '/comsys_notifications/');	
			ref.push({

				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
		},


		addEnemyPing: function(IDEvent, IDFaction, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase('https://socom-bo-estg-2015.firebaseio.com/events_in_progress/' + IDEvent + '/factions/' + IDFaction + '/');
			var postsRef = ref.child("special_actions/");
			var newPostRef = postsRef.push({
				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
		},

		sendNotificationToFaction: function (IDEvent, IDFaction, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase(firebaseUrl + IDEvent + '/factions/' + IDFaction + '/faction_notifications/');
			ref.push({
				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
		}
	};
	
});