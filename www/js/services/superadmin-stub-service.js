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

	data.changeMasterPassword = function(oldPassword, newPassword){
		requestPost.url = baseUrl + 'master/password/update';
		requestPost.params = { old: escape(oldPassword), new: escape(newPassword) };
		return $http(requestPost);
	}

	return data;
}]);
