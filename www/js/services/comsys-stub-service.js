app.factory('ComsysStubService', ['$http', function ($http) {
	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';
	var data = {};

	data.logoutComsys = function(){
		return $http.get(baseUrl + 'comsys/logout/');
	}

	return data;
}]);
