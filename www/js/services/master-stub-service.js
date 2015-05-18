app.factory('MasterStubService', ['$http', function ($http) {
	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';
	var data = {};
	var requestPost = 
	{
		 method: 'POST',
		 headers: {
		   'Content-Type': 'application/x-www-form-urlencoded'
		 },
	};
	

	data.login = function (username, password) {
		requestPost.url = baseUrl + 'master/login';
		requestPost.params = { username: escape(username), password: escape(password) };
		return $http(requestPost);
	};
		
	return data;
}]);
