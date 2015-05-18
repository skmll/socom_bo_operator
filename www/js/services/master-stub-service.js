app.factory('MasterStubService', ['$http', function ($http) {
	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v0/';
	//var baseUrlPost = '/postUserInfo';
	var data = {};

	data.login = function (user) {
		return $http.post(baseUrl + 'master/login', user);
	};
		
	return data;
}]);
