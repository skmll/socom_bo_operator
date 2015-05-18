app.factory('OperatorStubService', ['$http', function ($http) {

var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v0/';	
	var baseUrl2 = 'http://rest-service.guides.spring.io/greeting';
	//var baseUrlPost = '/postUserInfo';
	var data = {};

	data.getHelloWorld = function () {
		return $http.get(baseUrl2);
	};

data.unlockSquadSession = function (event) {
	return $http.post(baseUrl + 'event/' + event.idEvent + '/squadSession/' + event.idSquadSession + '/unlock');
};
	
	return data;
}]);