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

	return {
		
		logoutComsys: function(){
			return $http.get(baseUrl + 'comsys/logout/');
		},

		getComsysPersonalConfig: function () {
			return $http.get(baseUrl + 'comsys/config/personal/get');
		},

		createComsys: function(username, password, nickname) {
			requestPost.url = baseUrl + 'comsys/create';	
			requestPost.params = { username: escape(username), password: escape(password), nickname: escape(nickname) };
			return $http(requestPost);
		},

		updateComsysPersonalConfig: function(nickname, display_grid, coord_format) {
			requestPost.url = baseUrl + 'comsys/config/personal/update';	
			requestPost.params = { nickname: escape(nickname), display_grid: escape(display_grid), coord_format: escape(coord_format) };
			return $http(requestPost);
		},

		loginComsys: function(username, password) {
			requestPost.url = baseUrl + 'comsys/login';
			requestPost.params = { username: escape(username), password: escape(password) };
			return $http(requestPost);
		},

		loginCheckComsys: function () {
			return $http.get(baseUrl+'comsys/login/check');
		},

		logoutComsys: function(){
			return $http.get(baseUrl + 'comsys/logout');
		},

		changeComsysPassword: function(oldPassword, newPassword) {
			requestPost.url = baseUrl + 'comsys/password/update';
			requestPost.params = { old: escape(oldPassword), new: escape(newPassword) };
			return $http(requestPost);
		},
		
		sendNotificationToComsys: function(IDEvent, IDFaction, IDComsys, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase(firebaseUrl + IDEvent + '/factions/' + IDFaction + '/comsys_users/' + IDComsys + '/');
			var postsRef = ref.child("comsys_notifications/");
			var newPostRef = postsRef.push({
				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
		},
		
		sendNotificationToFaction: function(IDEvent, IDFaction, available_responses_list, responses_list, sender, text) {
			var ref = new Firebase(firebaseUrl + IDEvent + '/factions/' + IDFaction + '/faction_notifications/');
			var newPostRef = ref.push({
				available_responses_list: available_responses_list,
				responses_list: responses_list,
				sender: sender,
				text: text
			});
			console.log(newPostRef);
		}
		
	};
});
