app.factory('OperatorStubService', function ($http) {

	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';	
	var requestPost = 
	{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
	}

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
		}
		
	};
});
