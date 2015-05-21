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
	
		$scope.getPerksByName = function(name) {
		MasterStubService.getPerksByName(name)
		.success(function (data) {
			console.log(data);
			$scope.getPerksByNameResult = data.response;
		})
		.error(function (error) {
			$scope.getPerksByNameResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.getPerkByID = function(perkID) {
		MasterStubService.getPerkByID(perkID)
		.success(function (data) {
			console.log(data);
			$scope.getPerkByIDResult = data.response;
		})
		.error(function (error) {
			$scope.getPerkByIDResult = 'Unable to load data: ' + error;
		});
	};
	
		$scope.createMasterPerkRuleSet = function(description) {
		MasterStubService.createMasterPerkRuleSet(description)
		.success(function (data) {
			console.log(data);
			$scope.createMasterPerkRuleSetResult = data.response;
		})
		.error(function (error) {
			$scope.createMasterPerkRuleSetResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.updateMasterPerkRuleSet = function(description, perkRuleSetID) {
		MasterStubService.updateMasterPerkRuleSet(description)
		.success(function (data) {
			console.log(data);
			$scope.updateMasterPerkRuleSetResult = data.response;
		})
		.error(function (error) {
			$scope.updateMasterPerkRuleSetResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.deleteMasterPerkRuleSet = function(IDPerkRuleSet) {
		MasterStubService.deleteMasterPerkRuleSet(IDPerkRuleSet)
		.success(function (data) {
			console.log(data);
			$scope.deleteMasterPerkRuleSet = data.response;
		})
		.error(function (error) {
			$scope.deleteMasterPerkRuleSet = 'Unable to load data: ' + error;
		});
	};

		$scope.getAllMasterPerkRuleSets = function() {
		MasterStubService.getAllMasterPerkRuleSets()
		.success(function (data) {
			console.log(data);
			$scope.getAllMasterPerkRuleSetsResult = data.response;
		})
		.error(function (error) {
			$scope.getAllMasterPerkRuleSetsResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.createPerkRuleSetRule = function(master_perk_rule_id, perk_id, p_initial_time_delay, 
		p_cooldown_time, p_duration_time, p_vision_range, p_detection_range, p_max_units, p_cost) {
		MasterStubService.createPerkRuleSetRule(master_perk_rule_id, perk_id, p_initial_time_delay, 
		p_cooldown_time, p_duration_time, p_vision_range, p_detection_range, p_max_units, p_cost)
		.success(function (data) {
			console.log(data);
			$scope.createPerkRuleSetRuleResult = data.response;
		})
		.error(function (error) {
			$scope.createPerkRuleSetRuleResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.updatePerkRuleSetRule = function(master_perk_rule_id, perk_id, p_initial_time_delay, 
		p_cooldown_time, p_duration_time, p_vision_range, p_detection_range, p_max_units, p_cost) {
		MasterStubService.updatePerkRuleSetRule(master_perk_rule_id, perk_id, p_initial_time_delay, 
		p_cooldown_time, p_duration_time, p_vision_range, p_detection_range, p_max_units, p_cost)
		.success(function (data) {
			console.log(data);
			$scope.updatePerkRuleSetRuleResult = data.response;
		})
		.error(function (error) {
			$scope.updatePerkRuleSetRuleResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.deletePerkRuleSetRule = function() {
		MasterStubService.deletePerkRuleSetRule()
		.success(function (data) {
			console.log(data);
			$scope.deletePerkRuleSetRuleResult = data.response;
		})
		.error(function (error) {
			$scope.deletePerkRuleSetRuleResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.getPerkRuleSetRulesByPerkRuleSetID = function() {
		MasterStubService.getPerkRuleSetRulesByPerkRuleSetID()
		.success(function (data) {
			console.log(data);
			$scope.getPerkRuleSetRulesByPerkRuleSetIDResult = data.response;
		})
		.error(function (error) {
			$scope.getPerkRuleSetRulesByPerkRuleSetIDResult = 'Unable to load data: ' + error;
		});
	};
	
		$scope.getMasterZoneByID = function() {
		MasterStubService.getMasterZoneByID()
		.success(function (data) {
			console.log(data);
			$scope.getMasterZoneByIDResult = data.response;
		})
		.error(function (error) {
			$scope.getMasterZoneByIDResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.getMasterZoneByZoneTypeID = function() {
		MasterStubService.getMasterZoneByZoneTypeID()
		.success(function (data) {
			console.log(data);
			$scope.getMasterZoneByZoneTypeIDResult = data.response;
		})
		.error(function (error) {
			$scope.getMasterZoneByZoneTypeIDResult = 'Unable to load data: ' + error;
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
	

	$scope.attachPerkRuleSetToEvent = function() {
		//1 = eventId and perkRuleSetId examples
		MasterStubService.attachPerkRuleSetToEvent('1', '1')
		.success(function(data) {
			console.log(data);
			$scope.attachPerkRuleSetToEventResult = data.response;
		})
		.error(function(error) {
			$scope.attachPerkRuleSetToEventResult = 'Unable to load data: ' + error;
		});
	};

	$scope.removePerkRuleSetOfEvent = function() {
		//1 = event id example
		MasterStubService.removePerkRuleSetOfEvent('1')
		.success(function(data) {
			console.log(data);
			$scope.removePerkRuleSetOfEventResult = data.response;
		})
		.error(function(error) {
			$scope.removePerkRuleSetOfEventResult = 'Unable to load data: ' + error;
		});
	};

	$scope.attachTacticalActionRuleSetToEvent = function() {
		//1 = eventId, tacticalActionRuleSetId examples
		MasterStubService.attachTacticalActionRuleSetToEvent('1', '1')
		.success(function(data) {
			console.log(data);
			$scope.attachTacticalActionRuleSetToEventResult = data.response;
		})
		.error(function(error) {
			$scope.attachTacticalActionRuleSetToEventResult = 'Unable to load data: ' + error;
		});
	};

	$scope.removeTactionalRuleSetOfEvent = function() {
		//1 = event id example
		MasterStubService.removeTactionalRuleSetOfEvent('1')
		.success(function(data) {
			console.log(data);
			$scope.removeTactionalRuleSetOfEventResult = data.response;
		})
		.error(function(error) {
			$scope.removeTactionalRuleSetOfEventResult = 'Unable to load data: ' + error;
		});
	};

});
