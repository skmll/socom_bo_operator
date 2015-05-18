app.factory('OperatorStubService', ['$http', function ($http) {

	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';	
	var baseUrlExample = 'http://rest-service.guides.spring.io/greeting';
	
	var data = {};

	data.getHelloWorld = function () {
		return $http.get(baseUrlExample);
	};

	data.getOperatorPersonalConfig = function(){
		var url = baseUrl + 'operator/config/personal/get';
		return $http.get(url);
	}
	return data;
}]);