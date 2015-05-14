app.factory('OperatorStubService', ['$http', function ($http) {
	
	var baseUrl = 'http://rest-service.guides.spring.io/greeting';
	//var baseUrlPost = '/postUserInfo';
	var data = {};

	data.getHelloWorld = function () {
		return $http.get(baseUrl);
	};
		
	return data;
}]);