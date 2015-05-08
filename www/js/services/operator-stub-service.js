app.service('operatorService', ['$http', function ($http) {
	
	var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk';
	
    this.getRandomWord = function () {
		return $http.get(baseUrl);
	};
	
}]);