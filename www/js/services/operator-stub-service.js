app.service('operatorService', ['$http', function ($http) {
	
	var baseUrl = 'http://rest-service.guides.spring.io/greeting';
	
    this.getRandomWord = function () {
		return $http.get(baseUrl);
	};
	
}]);