app.controller('MasterController', function($scope, MasterStubService) {

	$scope.login = function(username, password) {
		MasterStubService.login(username, password)
		.success(function (data) {
			console.log(data);
			$scope.loginResult = data.response;
		})
		.error(function (error) {
			$scope.loginResult = 'Unable to load data: ' + error;
		});    
	};

	$scope.loginCheck = function() {    
		MasterStubService.loginCheckMaster()
		.success(function (data) {
			console.log(data);
			$scope.loginCheckResult = data.response;
		})
		.error(function (error) {
			$scope.loginCheckResult = 'Unable to load data: ' + error;
		});
	};

	$scope.logout = function() {
		MasterStubService.logoutMaster()
		.success(function (data) {
			console.log(data);
			$scope.logoutResult = data.response;
		})
		.error(function (error) {
			$scope.logoutResult = 'Unable to load data: ' + error;
		});
	};

	$scope.changeMasterPassword = function(oldPassword, newPassword) {    
		MasterStubService.changeMasterPassword(oldPassword, newPassword)
		.success(function (data) {
			console.log(data);
			$scope.changeMasterPasswordResult = data.response;
		})
		.error(function (error) {
			$scope.changeMasterPasswordResult = 'Unable to load data: ' + error;
		});
	};

	$scope.createMaster = function(email, password, nickname, logo, phone, address, zipcode, country, association_description, association_link, association_link_promo) {
		MasterStubService.createMaster(email, password, nickname, logo, phone, address, zipcode, country, association_description, association_link, association_link_promo)
		.success(function (data) {
			console.log(data);
			$scope.createMasterResult = data.response;
		})
		.error(function (error) {
			$scope.createMasterResult = 'Unable to load data: ' + error;
		});
	};

	$scope.updateMasterConfig = function(display_grid, coord_format, nickname, logo, 
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

	$scope.getAllMasterSponsors = function(){
		MasterStubService.getAllMasterSponsors()
		.success(function (data) {
			console.log(data);
			$scope.getAllMasterSponsorsResult = data.response;
		})
		.error(function (error) {
			$scope.getAllMasterSponsorsResult = 'Unable to load data: ' + error;
		});
	};

	$scope.updateMasterSponsor = function(sponsorID, name, logo) {    
		MasterStubService.updateMasterSponsor(sponsorID, name, logo)
		.success(function (data) {
			console.log(data);
			$scope.updateMasterSponsorResult = data.response;
		})
		.error(function (error) {
			$scope.updateMasterSponsorResult = 'Unable to load data: ' + error;
		});
	};

	$scope.deleteMasterSponsor = function(masterSponsor) {
		MasterStubService.deleteMasterSponsor(masterSponsor)
		.success(function(data) {
			console.log(data);
			$scope.deleteMasterSponsorResult = data.response;
		})
		.error(function(error) {
			$scope.deleteMasterSponsorResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllPerks = function() {
		MasterStubService.getAllPerks()
		.success(function(data) {
			console.log(data);
			$scope.getAllPerksResult = data.response;
		})
		.error(function(error) {
			$scope.getAllPerksResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getMasterSponsorByName = function(name){
		MasterStubService.getMasterSponsorByName(name)
		.success(function (data) {
			console.log(data);
			$scope.getMasterSponsorByNameResult = data.response;
		})
		.error(function (error) {
			$scope.getMasterSponsorByNameResult = 'Unable to load data: ' + error;
		});
	};

	$scope.createMasterSponsor = function(name, logo) {
		MasterStubService.createMasterSponsor(name, logo)
		.success(function (data) {
			console.log(data);
			$scope.createMasterSponsorResult = data.response;
		})
		.error(function (error) {
			$scope.createMasterSponsorResult = 'Unable to load data: ' + error;
		});
	};
	
		$scope.getPerksByName = function() {
		MasterStubService.getPerksByName()
		.success(function (data) {
			console.log(data);
			$scope.getPerksByNameResult = data.response;
		})
		.error(function (error) {
			$scope.getPerksByNameResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.getPerkByID = function() {
		MasterStubService.getPerkByID()
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
	
	$scope.updateMasterPerkRuleSet = function(description) {
		MasterStubService.updateMasterPerkRuleSet(description)
		.success(function (data) {
			console.log(data);
			$scope.updateMasterPerkRuleSetResult = data.response;
		})
		.error(function (error) {
			$scope.updateMasterPerkRuleSetResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.deleteMasterPerkRuleSet = function() {
		MasterStubService.deleteMasterPerkRuleSet()
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

});
