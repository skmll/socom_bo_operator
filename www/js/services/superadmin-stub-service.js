app.factory('SuperAdminStubService', function ($http) {

	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';

	var requestPost =
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		};

	$http.defaults.withCredentials = true;

	function escapeIfNotNull(variable) {

		return variable;
		/*if (variable != null) return escape(variable);
		return null;*/
	}

	return {

		/***** Laravel Services *****/
		
		/* Service #1 */
		loginSuperadmin: function (username, password) {
			requestPost.url = baseUrl + 'superadmin/login';
			requestPost.params = { username: escapeIfNotNull(username), password: escapeIfNotNull(password) };
			return $http(requestPost);
		},

		/* Service #2 */
		loginCheckSuperadmin: function () {
			return $http.get(baseUrl + 'superadmin/login/check');
		},

		/* Service #3 */
		logoutSuperadmin: function () {
			return $http.get(baseUrl + 'superadmin/logout');
		},
		
		/* Service #4 */
		changeMasterPassword: function (oldPassword, newPassword) {
			requestPost.url = baseUrl + 'master/password/update';
			requestPost.params = { old: escapeIfNotNull(oldPassword), new: escapeIfNotNull(newPassword) };
			return $http(requestPost);
		},

		/* Service #5 */
		acceptMasterRegistration: function (masterId) {
			return $http.get(baseUrl + 'superadmin/masters/accept/' + masterId);
		},

		/* Service #6 */
		refuseMasterRegistration: function (masterId) {
			return $http.get(baseUrl + 'superadmin/masters/refuse/' + masterId);
		},

		/* Service #7 */
		banMaster: function (masterId) {
			return $http.get(baseUrl + 'superadmin/masters/ban/' + masterId);
		},

		/* Service #8 */
		getAllMasters: function () {
			return $http.get(baseUrl + 'superadmin/masters/get/all');
		}

	};
});