app.factory('MasterStubService', ['$http', function ($http) {
	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';
	var data = {};

	

	data.login = function (username, password) {
		var req = {
		 method: 'POST',
		 url: baseUrl + 'master/login',
		 headers: {
		   'Content-Type': 'application/x-www-form-urlencoded'
		 },
		 params: { username: escape(username), password: escape(password) }
		}
		return $http(req);
	};
		
	return data;
}]);
