app.factory('SuperAdminStubService', ['$http', function ($http) {
	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';
	var data = {};
var requestPost = 
	{
		 method: 'POST',
		 headers: {
		   'Content-Type': 'application/x-www-form-urlencoded'
		 },
	};

		data.loginSuperadmin = function (username, password) {
		requestPost.url = baseUrl + 'superadmin/login';
		requestPost.params = { username: escape(username), password: escape(password) };
		return $http(requestPost);
	};

data.loginCheckSuperadmin = function() {
	return $http.get(baseUrl + 'superadmin/login/check');
}

data.logout = function () {
		return $http.get(baseUrl+'superadmin/logout');
	};
	
	data.acceptMasterRegistration = function (masterID) {
		return $http.get(baseUrl + 'superadmin/masters/accept/' + masterID);
	};

data.refuseMasterRegistration = function(masterAccount) {
	return $http.get(baseUrl + 'superadmin/masters/refuse/' + masterAccount.IDMasterAccount);
}

data.banMaster = function(masterAccount) {
	return $http.get(baseUrl + 'superadmin/masters/ban/' + masterAccount.IDMasterAccount);
}

	data.changeMasterPassword = function(oldPassword, newPassword){
		requestPost.url = baseUrl + 'master/password/update';
		requestPost.params = { old: escape(oldPassword), new: escape(newPassword) };
		return $http(requestPost);
	}

	data.getAllMasters = function () {
		return $http.get(baseUrl + 'superadmin/masters/get/all');
	};
	
	return data;
}]);
