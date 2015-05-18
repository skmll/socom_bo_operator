app.factory('SuperAdminStubService', ['$http', function ($http) {
	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v0/';
		var data = {};

data.refuseGameMasterRegistration = function(account) {
return $http.post(baseUrl + 'superadmin/refuse', account.IDPendingAccount);
}
	return data;
}]);
