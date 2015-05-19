app.factory('MasterStubService', ['$http', function ($http) {

	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';
	var data = {};
	var requestPost = 
	{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
	}

	data.login = function (username, password) {
		requestPost.url = baseUrl + 'master/login';
		requestPost.params = { username: escape(username), password: escape(password) };
		return $http(requestPost);
	}

	data.loginCheckMaster = function () {
		var url = baseUrl + 'master/login/check';
		return $http.get(url);
	}

	data.logoutMaster = function () {
		var url = baseUrl + 'master/logout';
		return $http.get(url);
	}

	data.createMaster = function (email, password, nickname, logo,
			phone, address, zipcode, country, association_description, association_link, association_link_promo  ){
		requestPost.url = baseUrl + 'master/create';
		requestPost.params = { email: escape(email), password: escape(password), nickname: escape(nickname),
				logo: escape(logo), phone: escape(phone),address: escape(address),zipcode: escape(zipcode),country: escape(country),
				association_description: escape(association_description),association_link: escape(association_link),
				association_link_promo: escape(association_link_promo)};
		return $http(requestPost);
	}

	data.updateMasterPersonalConfig = function (display_grid, coord_format, nickname, logo, 
			phone, address, zipcode, country, association_description, association_link, association_link_promo) {
		requestPost.url = baseUrl + 'master/config/personal/update';
		requestPost.params = { display_grid: display_grid, coord_format: coord_format, nickname: nickname,
				logo: logo, phone: phone, address: address, zipcode: zipcode, country: country,
				association_description: association_description, association_link: association_link, 
				association_link_promo: association_link_promo};
		return $http(requestPost);
	}

	data.getAllMasterSponsors = function(){
		var url = baseUrl + 'master/sponsor/get/all';
		return $http.get(url);	
	}

	data.changeMasterPassword = function (oldPassword, newPassword) {
		requestPost.url = baseUrl + 'master/password/update';
		requestPost.params = { old: escape(oldPassword), new: escape(newPassword) };
		return $http(requestPost);
	}
	
	data.updateMasterSponsor = function (sponsorID, name, logo) {
		requestPost.url = baseUrl + 'master/sponsor/update/' + sponsorID;
		requestPost.params = { name: escape(name), logo: escape(logo) };
		return $http(requestPost);
	};

	data.deleteMasterSponsor = function(masterSponsor) {
		return $http.get(baseUrl + 'master/sponsor/delete/' + masterSponsor.IDSponsor);
	}

	data.getAllPerks = function() {
		return $http.get(baseUrl + 'master/perk/get/all');
	}

	data.getMasterSponsorByName = function (name) {
		return $http.get(baseUrl + 'master/sponsor/get/name/' + name);
	}

	data.createMasterSponsor = function(name, logo) {
		requestPost.url = baseUrl + 'master/sponsor/create';
		requestPost.params = { name: escape(name), logo: escape(logo) };
		return $http(requestPost);
	}

	return data;
}]);
