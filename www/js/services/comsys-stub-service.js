app.factory('ComsysStubService', ['$http', function ($http) {
	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v0/';
	var data = {};


	data.attachMapToEvent = function (event) {
	return $http.post(baseUrl + 'event/' + event.IDEvent + '/attach/map');
};

	return data;
}]);
