app.factory('SuperAdminStubService', function ($http) {

	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';
	var requestPost = 
	{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
	}

	return {
		loginSuperadmin: function (username, password) {
			requestPost.url = baseUrl + 'superadmin/login';
			requestPost.params = { username: escape(username), password: escape(password) };
			return $http(requestPost);
		},

		loginCheckSuperadmin: function() {
			return $http.get(baseUrl + 'superadmin/login/check');
		},

		logout: function () {
			return $http.get(baseUrl+'superadmin/logout');
		},

		acceptMasterRegistration: function (masterID) {
			return $http.get(baseUrl + 'superadmin/masters/accept/' + masterID);
		},

		refuseMasterRegistration: function(masterAccountId) {
			return $http.get(baseUrl + 'superadmin/masters/refuse/' + masterAccountId);
		},

		banMaster: function(masterAccountId) {
			return $http.get(baseUrl + 'superadmin/masters/ban/' + masterAccountId);
		},

		changeMasterPassword: function(oldPassword, newPassword){
			requestPost.url = baseUrl + 'master/password/update';
			requestPost.params = { old: escape(oldPassword), new: escape(newPassword) };
			return $http(requestPost);
		},

		getAllMasters: function () {
			return $http.get(baseUrl + 'superadmin/masters/get/all');
		}

	};
	
});
