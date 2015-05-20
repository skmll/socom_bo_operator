app.factory('ComsysStubService', function ($http) {

	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';
	var requestPost = 
	{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
	}

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
		}

	}
	
});
