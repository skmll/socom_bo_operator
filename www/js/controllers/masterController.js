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
	}

	$scope.loginCheck = function() {    
		MasterStubService.loginCheckMaster()
		.success(function (data) {
			console.log(data);
			$scope.loginCheckResult = data.response;
		})
		.error(function (error) {
			$scope.loginCheckResult = 'Unable to load data: ' + error;
		});
	}

	$scope.logout = function() {
		MasterStubService.logoutMaster()
		.success(function (data) {
			console.log(data);
			$scope.logoutResult = data.response;
		})
		.error(function (error) {
			$scope.logoutResult = 'Unable to load data: ' + error;
		});
	}

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
	}

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
	}

	$scope.getAllMasterSponsors = function(){
		MasterStubService.getAllMasterSponsors()
		.success(function (data) {
			console.log(data);
			$scope.getAllMasterSponsorsResult = data.response;
		})
		.error(function (error) {
			$scope.getAllMasterSponsorsResult = 'Unable to load data: ' + error;
		});
	}

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
	}

	$scope.getAllPerks = function() {
		MasterStubService.getAllPerks()
		.success(function(data) {
			console.log(data);
			$scope.getAllPerksResult = data.response;
		})
		.error(function(error) {
			$scope.getAllPerksResult = 'Unable to load data: ' + error;
		});
	}

	$scope.getMasterSponsorByName = function(name){
		MasterStubService.getMasterSponsorByName(name)
		.success(function (data) {
			console.log(data);
			$scope.getMasterSponsorByNameResult = data.response;
		})
		.error(function (error) {
			$scope.getMasterSponsorByNameResult = 'Unable to load data: ' + error;
		});
	}

	$scope.createMasterSponsor = function(name, logo) {
		MasterStubService.createMasterSponsor(name, logo)
		.success(function (data) {
			console.log(data);
			$scope.createMasterSponsorResult = data.response;
		})
		.error(function (error) {
			$scope.createMasterSponsorResult = 'Unable to load data: ' + error;
		});
	}

	$scope.removeSponsorOfEvent = function(IDEvent, IDSponsor) {
		MasterStubService.removeSponsorOfEvent(IDEvent, IDSponsor)
		.success(function (data) {
			console.log(data);
			$scope.removeSponsorOfEventResult = data.response;
		})
		.error(function (error) {
			$scope.removeSponsorOfEventResult = 'Unable to load data: ' + error;
		});
	}

	$scope.attachSponsorToEvent = function(IDEvent, IDSponsor) {
		MasterStubService.attachSponsorToEvent(IDEvent, IDSponsor)
		.success(function (data) {
			console.log(data);
			$scope.attachSponsorToEventResult = data.response;
		})
		.error(function (error) {
			$scope.attachSponsorToEventResult = 'Unable to load data: ' + error;
		});
	}

	$scope.getTacticalActionRuleSetRulesByTacticalActionRuleSetID = function(IDTacticalActionRuleSet) {
		MasterStubService.getTacticalActionRuleSetRulesByTacticalActionRuleSetID(IDTacticalActionRuleSet)
		.success(function (data) {
			console.log(data);
			$scope.getTacticalActionRuleSetRulesByTacticalActionRuleSetIDResult = data.response;
		})
		.error(function (error) {
			$scope.getTacticalActionRuleSetRulesByTacticalActionRuleSetIDResult = 'Unable to load data: ' + error;
		});
	}

	$scope.deleteTacticalActionRuleSetRule = function(IDTacticalActionRule) {
		MasterStubService.deleteTacticalActionRuleSetRule(IDTacticalActionRule)
		.success(function (data) {
			console.log(data);
			$scope.deleteTacticalActionRuleSetRuleResult = data.response;
		})
		.error(function (error) {
			$scope.deleteTacticalActionRuleSetRuleResult = 'Unable to load data: ' + error;
		});
	}

	$scope.getAllMasterTacticalActionRuleSets = function() {
		MasterStubService.getAllMasterTacticalActionRuleSets()
		.success(function (data) {
			console.log(data);
			$scope.getAllMasterTacticalActionRuleSetsResult = data.response;
		})
		.error(function (error) {
			$scope.getAllMasterTacticalActionRuleSetsResult = 'Unable to load data: ' + error;
		});
	}

	$scope.deleteMasterTacticalActionRuleSet = function(IDTacticalActionRuleSet) {
		MasterStubService.deleteMasterTacticalActionRuleSet(IDTacticalActionRuleSet)
		.success(function (data) {
			console.log(data);
			$scope.deleteMasterTacticalActionRuleSetResult = data.response;
		})
		.error(function (error) {
			$scope.deleteMasterTacticalActionRuleSetResult = 'Unable to load data: ' + error;
		});
	}

	$scope.getTacticalActionByID = function(IDTacticalAction) {
		MasterStubService.getTacticalActionByID(IDTacticalAction)
		.success(function (data) {
			console.log(data);
			$scope.getTacticalActionByIDResult = data.response;
		})
		.error(function (error) {
			$scope.getTacticalActionByIDResult = 'Unable to load data: ' + error;
		});
	}

	$scope.getTacticalActionsByName = function(name) {
		MasterStubService.getTacticalActionsByName(name)
		.success(function (data) {
			console.log(data);
			$scope.getTacticalActionsByNameResult = data.response;
		})
		.error(function (error) {
			$scope.getTacticalActionsByNameResult = 'Unable to load data: ' + error;
		});
	}

	$scope.getAllTacticalActions = function() {
		MasterStubService.getAllTacticalActions()
		.success(function (data) {
			console.log(data);
			$scope.getAllTacticalActionsResult = data.response;
		})
		.error(function (error) {
			$scope.getAllTacticalActionsResult = 'Unable to load data: ' + error;
		});
	}

	$scope.createMasterTacticalActionRuleSet = function(description) {
		MasterStubService.createMasterTacticalActionRuleSet(description)
		.success(function (data) {
			console.log(data);
			$scope.createMasterTacticalActionRuleSetResult = data.response;
		})
		.error(function (error) {
			$scope.createMasterTacticalActionRuleSetResult = 'Unable to load data: ' + error;
		});
	}

	$scope.updateMasterTacticalActionRuleSet = function(IDTacticalActionRuleSet, description) {
		MasterStubService.updateMasterTacticalActionRuleSet(IDTacticalActionRuleSet, description)
		.success(function (data) {
			console.log(data);
			$scope.updateMasterTacticalActionRuleSetResult = data.response;
		})
		.error(function (error) {
			$scope.updateMasterTacticalActionRuleSetResult = 'Unable to load data: ' + error;
		});
	}

	$scope.createTacticalActionRuleSetRule = function(master_tacticalaction_rule_id, tacticalaction_id, ta_initial_time_delay, ta_cooldown_time, ta_duration_time, ta_vision_range, ta_detection_range, ta_death_range, ta_cost) {
		MasterStubService.createTacticalActionRuleSetRule(master_tacticalaction_rule_id, tacticalaction_id, ta_initial_time_delay, ta_cooldown_time, ta_duration_time, ta_vision_range, ta_detection_range, ta_death_range, ta_cost)
		.success(function (data) {
			console.log(data);
			$scope.createTacticalActionRuleSetRuleResult = data.response;
		})
		.error(function (error) {
			$scope.createTacticalActionRuleSetRuleResult = 'Unable to load data: ' + error;
		});
	}

	$scope.updateTacticalActionRuleSetRule = function(IDTacticalActionRule, master_tacticalaction_rule_id, tacticalaction_id, ta_initial_time_delay, ta_cooldown_time, ta_duration_time, ta_vision_range, ta_detection_range, ta_death_range, ta_cost) {
		MasterStubService.updateTacticalActionRuleSetRule(IDTacticalActionRule, master_tacticalaction_rule_id, tacticalaction_id, ta_initial_time_delay, ta_cooldown_time, ta_duration_time, ta_vision_range, ta_detection_range, ta_death_range, ta_cost)
		.success(function (data) {
			console.log(data);
			$scope.updateTacticalActionRuleSetRuleResult = data.response;
		})
		.error(function (error) {
			$scope.updateTacticalActionRuleSetRuleResult = 'Unable to load data: ' + error;
		});
	}

});
