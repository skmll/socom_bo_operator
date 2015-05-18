app.factory('MasterStubService', ['$http', function ($http) {
	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';
	var data = {};
	var requestPost = 
	{
		 method: 'POST',
		 headers: {
		   'Content-Type': 'application/x-www-form-urlencoded'
		 },
	};
	

	data.login = function (username, password) {
		requestPost.url = baseUrl + 'master/login';
		requestPost.params = { username: escape(username), password: escape(password) };
		return $http(requestPost);
	};
	
	data.loginCheckMaster = function () {
		var url = baseUrl + 'master/login/check';
		return $http.get(url);
	};
	
	data.logoutMaster = function () {
		var url = baseUrl + 'master/logout';
		return $http.get(url);
	};
	
	data.updateMasterPersonalConfig = function (display_grid, coord_format, nickname, logo, 
			phone, address, zipcode, country, association_description, association_link, association_link_promo) {
				
		requestPost.url = baseUrl + 'master/config/personal/update';
		requestPost.params = { display_grid: display_grid, coord_format: coord_format, nickname: nickname,
			 logo: logo, phone: phone, address: address, zipcode: zipcode, country: country,
			  association_description: association_description, association_link: association_link, 
			  	association_link_promo: association_link_promo};
		return $http(requestPost);
	};
	
	data.getAllMasterSponsors = function(){
		var url = baseUrl + 'master/sponsor/get/all';
		return $http.get(url);	
	};
		
	return data;
}]);
