app.factory('CommonStubService', ['$http', function ($http) {
	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v0/';	
	var data = {};
	
	data.getAllEvents = function(){
		return $http.get(baseUrl + 'event/get/all');
	};
	
	return data;
}]);