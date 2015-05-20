app.controller('MasterController', function ($scope, MasterStubService) {

	$scope.login = function (username, password) {
		MasterStubService.login(username, password)
			.success(function (data) {
			console.log(data);
			$scope.loginResult = data.response;
		})
			.error(function (error) {
			$scope.loginResult = 'Unable to load data: ' + error;
		});
	};

	$scope.loginCheck = function () {
		MasterStubService.loginCheckMaster()
			.success(function (data) {
			console.log(data);
			$scope.loginCheckResult = data.response;
		})
			.error(function (error) {
			$scope.loginCheckResult = 'Unable to load data: ' + error;
		});
	};

	$scope.logout = function () {
		MasterStubService.logoutMaster()
			.success(function (data) {
			console.log(data);
			$scope.logoutResult = data.response;
		})
			.error(function (error) {
			$scope.logoutResult = 'Unable to load data: ' + error;
		});
	};

	$scope.changeMasterPassword = function (oldPassword, newPassword) {
		MasterStubService.changeMasterPassword(oldPassword, newPassword)
			.success(function (data) {
			console.log(data);
			$scope.changeMasterPasswordResult = data.response;
		})
			.error(function (error) {
			$scope.changeMasterPasswordResult = 'Unable to load data: ' + error;
		});
	};

	$scope.createMaster = function (email, password, nickname, logo, phone, address, zipcode, country, association_description, association_link, association_link_promo) {
		MasterStubService.createMaster(email, password, nickname, logo, phone, address, zipcode, country, association_description, association_link, association_link_promo)
			.success(function (data) {
			console.log(data);
			$scope.createMasterResult = data.response;
		})
			.error(function (error) {
			$scope.createMasterResult = 'Unable to load data: ' + error;
		});
	};

	$scope.updateMasterConfig = function (display_grid, coord_format, nickname, logo,
		phone, address, zipcode, country, association_description, association_link, association_link_promo) {
		MasterStubService.updateMasterPersonalConfig(display_grid, coord_format, nickname, logo,
			phone, address, zipcode, country, association_description, association_link, association_link_promo)
			.success(function (data) {
			console.log(data);
			$scope.updateMasterConfigResult = data.response;
		})
			.error(function (error) {
			$scope.updateMasterConfigResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllMasterSponsors = function () {
		MasterStubService.getAllMasterSponsors()
			.success(function (data) {
			console.log(data);
			$scope.getAllMasterSponsorsResult = data.response;
		})
			.error(function (error) {
			$scope.getAllMasterSponsorsResult = 'Unable to load data: ' + error;
		});
	};

	$scope.updateMasterSponsor = function (sponsorID, name, logo) {
		MasterStubService.updateMasterSponsor(sponsorID, name, logo)
			.success(function (data) {
			console.log(data);
			$scope.updateMasterSponsorResult = data.response;
		})
			.error(function (error) {
			$scope.updateMasterSponsorResult = 'Unable to load data: ' + error;
		});
	};

	$scope.deleteMasterSponsor = function (masterSponsor) {
		MasterStubService.deleteMasterSponsor(masterSponsor)
			.success(function (data) {
			console.log(data);
			$scope.deleteMasterSponsorResult = data.response;
		})
			.error(function (error) {
			$scope.deleteMasterSponsorResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllPerks = function () {
		MasterStubService.getAllPerks()
			.success(function (data) {
			console.log(data);
			$scope.getAllPerksResult = data.response;
		})
			.error(function (error) {
			$scope.getAllPerksResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getMasterSponsorByName = function (name) {
		MasterStubService.getMasterSponsorByName(name)
			.success(function (data) {
			console.log(data);
			$scope.getMasterSponsorByNameResult = data.response;
		})
			.error(function (error) {
			$scope.getMasterSponsorByNameResult = 'Unable to load data: ' + error;
		});
	};

	$scope.createMasterSponsor = function (name, logo) {
		MasterStubService.createMasterSponsor(name, logo)
			.success(function (data) {
			console.log(data);
			$scope.createMasterSponsorResult = data.response;
		})
			.error(function (error) {
			$scope.createMasterSponsorResult = 'Unable to load data: ' + error;
		});
	};

	$scope.createZoneType = function () {

		MasterStubService.createZoneType('name')
			.success(function (data) {
			console.log(data);
			$scope.createZoneTypeResult = data.response;
		})
			.error(function (error) {
			$scope.createZoneTypeResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.updateZoneType = function () {

		MasterStubService.updateZoneType('1', 'name')
			.success(function (data) {
			console.log(data);
			$scope.updateZoneTypeResult = data.response;
		})
			.error(function (error) {
			$scope.updateZoneTypeResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.deleteZoneType = function () {

		MasterStubService.deleteZoneType('1')
			.success(function (data) {
			console.log(data);
			$scope.deleteZoneTypeResult = data.response;
		})
			.error(function (error) {
			$scope.deleteZoneTypeResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.getAllZoneTypes = function () {

		MasterStubService.getAllZoneTypes()
			.success(function (data) {
			console.log(data);
			$scope.getAllZoneTypesResult = data.response;
		})
			.error(function (error) {
			$scope.getAllZoneTypesResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.getServerDefinedZoneTypes = function () {

		MasterStubService.getServerDefinedZoneTypes()
			.success(function (data) {
			console.log(data);
			$scope.getServerDefinedZoneTypesResult = data.response;
		})
			.error(function (error) {
			$scope.getServerDefinedZoneTypesResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.getMasterDefinedZoneTypes = function () {

		MasterStubService.getMasterDefinedZoneTypes()
			.success(function (data) {
			console.log(data);
			$scope.getMasterDefinedZoneTypesResult = data.response;
		})
			.error(function (error) {
			$scope.getMasterDefinedZoneTypesResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.getZoneTypesByName = function () {

		MasterStubService.getZoneTypesByName('name')
			.success(function (data) {
			console.log(data);
			$scope.getZoneTypesByNameResult = data.response;
		})
			.error(function (error) {
			$scope.getZoneTypesByNameResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.getZoneTypeByID = function () {

		MasterStubService.getZoneTypeByID('1')
			.success(function (data) {
			console.log(data);
			$scope.getZoneTypeByIDResult = data.response;
		})
			.error(function (error) {
			$scope.getZoneTypeByIDResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.createMasterZone  = function () {

		MasterStubService.createMasterZone('1','description','capture points')
			.success(function (data) {
			console.log(data);
			$scope.createMasterZoneResult = data.response;
		})
			.error(function (error) {
			$scope.createMasterZoneResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.updateMasterZone  = function () {

		MasterStubService.updateMasterZone('1','description','capture points')
			.success(function (data) {
			console.log(data);
			$scope.updateMasterZoneResult = data.response;
		})
			.error(function (error) {
			$scope.updateMasterZoneResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.deleteMasterZone  = function () {

		MasterStubService.deleteMasterZone('1')
			.success(function (data) {
			console.log(data);
			$scope.deleteMasterZoneResult = data.response;
		})
			.error(function (error) {
			$scope.deleteMasterZoneResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllMasterZones = function () {

		MasterStubService.getAllMasterZones()
			.success(function (data) {
			console.log(data);
			$scope.getAllMasterZonesResult = data.response;
		})
			.error(function (error) {
			$scope.getAllMasterZonesResult = 'Unable to load data: ' + error;
		});
	};
	
});
