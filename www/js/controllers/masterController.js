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

	$scope.getMasterPersonalConfig = function () {
		MasterStubService.getMasterPersonalConfig()
			.success(function (data) {
			console.log(data);
			$scope.getMasterPersonalConfigResult = data.response;
		})
			.error(function (error) {
			$scope.getMasterPersonalConfigResult = 'Unable to load data: ' + error;
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

	$scope.updateMasterSponsor = function (sponsorId, name, logo) {
		MasterStubService.updateMasterSponsor(sponsorId, name, logo)
			.success(function (data) {
			console.log(data);
			$scope.updateMasterSponsorResult = data.response;
		})
			.error(function (error) {
			$scope.updateMasterSponsorResult = 'Unable to load data: ' + error;
		});
	};

	$scope.deleteMasterSponsor = function (sponsorId) {
		MasterStubService.deleteMasterSponsor(sponsorId)
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

	$scope.getPerksByName = function (name) {
		MasterStubService.getPerksByName(name)

			.success(function (data) {
			console.log(data);
			$scope.getPerksByNameResult = data.response;
		})
			.error(function (error) {
			$scope.getPerksByNameResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getPerkByID = function (perkID) {
		MasterStubService.getPerkByID(perkID)
			.success(function (data) {
			console.log(data);
			$scope.getPerkByIDResult = data.response;
		})
			.error(function (error) {
			$scope.getPerkByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.createMasterPerkRuleSet = function (description) {
		MasterStubService.createMasterPerkRuleSet(description)
			.success(function (data) {
			console.log(data);
			$scope.createMasterPerkRuleSetResult = data.response;
		})
			.error(function (error) {
			$scope.createMasterPerkRuleSetResult = 'Unable to load data: ' + error;
		});
	};

	$scope.updateMasterPerkRuleSet = function (description, perkRuleSetID) {
		MasterStubService.updateMasterPerkRuleSet(description)
			.success(function (data) {
			console.log(data);
			$scope.updateMasterPerkRuleSetResult = data.response;
		})
			.error(function (error) {
			$scope.updateMasterPerkRuleSetResult = 'Unable to load data: ' + error;
		});
	};

	$scope.deleteMasterPerkRuleSet = function (perkRuleSetID) {
		MasterStubService.deleteMasterPerkRuleSet(perkRuleSetID)
			.success(function (data) {
			console.log(data);
			$scope.deleteMasterPerkRuleSetResult = data.response;
		})
			.error(function (error) {
			$scope.deleteMasterPerkRuleSetResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllMasterPerkRuleSets = function () {
		MasterStubService.getAllMasterPerkRuleSets()
			.success(function (data) {
			console.log(data);
			$scope.getAllMasterPerkRuleSetsResult = data.response;
		})
			.error(function (error) {
			$scope.getAllMasterPerkRuleSetsResult = 'Unable to load data: ' + error;
		});
	};

	$scope.createPerkRuleSetRule = function (master_perk_rule_id, perk_id, p_initial_time_delay,
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

	$scope.updatePerkRuleSetRule = function (master_perk_rule_id, perk_id, p_initial_time_delay,
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

	$scope.deletePerkRuleSetRule = function () {
		MasterStubService.deletePerkRuleSetRule()
			.success(function (data) {
			console.log(data);
			$scope.deletePerkRuleSetRuleResult = data.response;
		})
			.error(function (error) {
			$scope.deletePerkRuleSetRuleResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getPerkRuleSetRulesByPerkRuleSetID = function () {
		MasterStubService.getPerkRuleSetRulesByPerkRuleSetID()
			.success(function (data) {
			console.log(data);
			$scope.getPerkRuleSetRulesByPerkRuleSetIDResult = data.response;
		})
			.error(function (error) {
			$scope.getPerkRuleSetRulesByPerkRuleSetIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getMasterZoneByID = function () {
		MasterStubService.getMasterZoneByID()
			.success(function (data) {
			console.log(data);
			$scope.getMasterZoneByIDResult = data.response;
		})
			.error(function (error) {
			$scope.getMasterZoneByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getMasterZoneByZoneTypeID = function () {
		MasterStubService.getMasterZoneByZoneTypeID()
			.success(function (data) {
			console.log(data);
			$scope.getMasterZoneByZoneTypeIDResult = data.response;
		})
			.error(function (error) {
			$scope.getMasterZoneByZoneTypeIDResult = 'Unable to load data: ' + error;
		});
	};


	$scope.createZoneType = function (zoneName) {
		MasterStubService.createZoneType(zoneName)
			.success(function (data) {
			console.log(data);
			$scope.createZoneTypeResult = data.response;
		})
			.error(function (error) {
			$scope.createZoneTypeResult = 'Unable to load data: ' + error;
		});
	};

	$scope.updateZoneType = function (zoneTypeId, zoneName) {

		MasterStubService.updateZoneType(zoneTypeId, zoneName)
			.success(function (data) {
			console.log(data);
			$scope.updateZoneTypeResult = data.response;
		})
			.error(function (error) {
			$scope.updateZoneTypeResult = 'Unable to load data: ' + error;
		});
	};

	$scope.deleteZoneType = function (zoneTypeId) {

		MasterStubService.deleteZoneType(zoneTypeId)
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

	$scope.getZoneTypesByName = function (zoneName) {

		MasterStubService.getZoneTypesByName(zoneName)
			.success(function (data) {
			console.log(data);
			$scope.getZoneTypesByNameResult = data.response;
		})
			.error(function (error) {
			$scope.getZoneTypesByNameResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getZoneTypeByID = function (zoneTypeId) {

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

		MasterStubService.getZoneTypeByID(zoneTypeId)
			.success(function (data) {
			console.log(data);
			$scope.getZoneTypeByIDResult = data.response;
		})
			.error(function (error) {
			$scope.getZoneTypeByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.createMasterZone = function (zoneTypeId, description, capturePoints) {

		MasterStubService.createMasterZone(zoneTypeId, description, capturePoints)
			.success(function (data) {
			console.log(data);
			$scope.createMasterZoneResult = data.response;
		})
			.error(function (error) {
			$scope.createMasterZoneResult = 'Unable to load data: ' + error;
		});
	};

	$scope.updateMasterZone = function (masterZoneId, zoneTypeId, description, capturePoints) {

		MasterStubService.updateMasterZone(masterZoneId, zoneTypeId, description, capturePoints)
			.success(function (data) {
			console.log(data);
			$scope.updateMasterZoneResult = data.response;
		})
			.error(function (error) {
			$scope.updateMasterZoneResult = 'Unable to load data: ' + error;
		});
	};

	$scope.deleteMasterZone = function (masterZoneId) {

		MasterStubService.deleteMasterZone(masterZoneId)
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


	$scope.attachPerkRuleSetToEvent = function (eventId, perkRuleSetId) {
		MasterStubService.attachPerkRuleSetToEvent(eventId, perkRuleSetId)
			.success(function (data) {
			console.log(data);
			$scope.attachPerkRuleSetToEventResult = data.response;
		})
			.error(function (error) {
			$scope.attachPerkRuleSetToEventResult = 'Unable to load data: ' + error;
		});
	};

	$scope.removePerkRuleSetOfEvent = function (eventId) {
		MasterStubService.removePerkRuleSetOfEvent(eventId)
			.success(function (data) {
			console.log(data);
			$scope.removePerkRuleSetOfEventResult = data.response;
		})
			.error(function (error) {
			$scope.removePerkRuleSetOfEventResult = 'Unable to load data: ' + error;
		});
	};

	$scope.attachTacticalActionRuleSetToEvent = function (eventId, tacticalActionRuleSetId) {
		MasterStubService.attachTacticalActionRuleSetToEvent(eventId, tacticalActionRuleSetId)
			.success(function (data) {
			console.log(data);
			$scope.attachTacticalActionRuleSetToEventResult = data.response;
		})
			.error(function (error) {
			$scope.attachTacticalActionRuleSetToEventResult = 'Unable to load data: ' + error;
		});
	};

	$scope.removeTactionalRuleSetOfEvent = function (eventId) {
		MasterStubService.removeTactionalRuleSetOfEvent(eventId)
			.success(function (data) {
			console.log(data);
			$scope.removeTactionalRuleSetOfEventResult = data.response;
		})
			.error(function (error) {
			$scope.removeTactionalRuleSetOfEventResult = 'Unable to load data: ' + error;
		});
	};

	$scope.createZoneCoord = function (masterPersonalZoneId, lat_c, lat_d, lat_m, lat_s, lng_c, lng_d, lng_m, lng_s) {
		MasterStubService.createZoneCoord(masterPersonalZoneId, lat_c, lat_d, lat_m, lat_s, lng_c, lng_d, lng_m, lng_s)
			.success(function (data) {
			console.log(data);
			$scope.createZoneCoordResult = data.response;
		})
			.error(function (error) {
			$scope.createZoneCoordResult = 'Unable to load data: ' + error;
		});
	};

	$scope.updateZoneCoord = function (coordId, masterPersonalZoneId, lat_c, lat_d, lat_m, lat_s, lng_c, lng_d, lng_m, lng_s) {
		MasterStubService.updateZoneCoord(coordId, masterPersonalZoneId, lat_c, lat_d, lat_m, lat_s, lng_c, lng_d, lng_m, lng_s)
			.success(function (data) {
			console.log(data);
			$scope.updateZoneCoordResult = data.response;
		})
			.error(function (error) {
			$scope.updateZoneCoordResult = 'Unable to load data: ' + error;
		});
	};

	$scope.deleteZoneCoord = function (coordId) {
		MasterStubService.deleteZoneCoord(coordId)
			.success(function (data) {
			console.log(data);
			$scope.deleteZoneCoordResult = data.response;
		})
			.error(function (error) {
			$scope.deleteZoneCoordResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getZoneCoordByID = function (coordId) {
		MasterStubService.getZoneCoordByID(coordId)
			.success(function (data) {
			console.log(data);
			$scope.getZoneCoordByIDResult = data.response;
		})
			.error(function (error) {
			$scope.getZoneCoordByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getZoneCoordByMasterZoneID = function (masterZoneId) {
		MasterStubService.getZoneCoordByMasterZoneID(masterZoneId)
			.success(function (data) {
			console.log(data);
			$scope.getZoneCoordByMasterZoneIDResult = data.response;
		})
			.error(function (error) {
			$scope.getZoneCoordByMasterZoneIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllMasterEvents = function () {
		MasterStubService.getAllMasterEvents()
			.success(function (data) {
			console.log(data);
			$scope.getAllMasterEventsResult = data.response;
		})
			.error(function (error) {
			$scope.getAllMasterEventsResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getMasterEventByID = function (eventId) {
		MasterStubService.getMasterEventByID(eventId)
			.success(function (data) {
			console.log(data);
			$scope.getMasterEventByIDResult = data.response;
		})
			.error(function (error) {
			$scope.getMasterEventByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.createEvent = function (description_briefing, address, rules, prohibitions, proceedment, additional_informations, registration_date_start, registration_date_end, event_date_start, event_date_end, operator_inicial_perk_points, max_comsys_per_faction, max_operators_per_faction, respawn_delay, gps_refresh_rate_min, gps_refresh_rate_max, see_enemies_bases, see_enemies_respawn) {
		MasterStubService.createEvent(description_briefing, address, rules, prohibitions, proceedment, additional_informations, registration_date_start, registration_date_end, event_date_start, event_date_end, operator_inicial_perk_points, max_comsys_per_faction, max_operators_per_faction, respawn_delay, gps_refresh_rate_min, gps_refresh_rate_max, see_enemies_bases, see_enemies_respawn)
			.success(function (data) {
			console.log(data);
			$scope.createEventResult = data.response;
		})
			.error(function (error) {
			$scope.createEventResult = 'Unable to load data: ' + error;
		});
	};

	$scope.updateEvent = function (eventId, description_briefing, address, rules, prohibitions, proceedment, additional_informations, registration_date_start, registration_date_end, event_date_start, event_date_end, operator_inicial_perk_points, max_comsys_per_faction, max_operators_per_faction, respawn_delay, gps_refresh_rate_min, gps_refresh_rate_max, see_enemies_bases, see_enemies_respawn) {
		MasterStubService.updateEvent(eventId, description_briefing, address, rules, prohibitions, proceedment, additional_informations, registration_date_start, registration_date_end, event_date_start, event_date_end, operator_inicial_perk_points, max_comsys_per_faction, max_operators_per_faction, respawn_delay, gps_refresh_rate_min, gps_refresh_rate_max, see_enemies_bases, see_enemies_respawn)
			.success(function (data) {
			console.log(data);
			$scope.updateEventResult = data.response;
		})
			.error(function (error) {
			$scope.updateEventResult = 'Unable to load data: ' + error;
		});
	};

	$scope.deleteEvent = function (eventId) {
		MasterStubService.deleteEvent(eventId)
			.success(function (data) {
			console.log(data);
			$scope.deleteEventResult = data.response;
		})
			.error(function (error) {
			$scope.deleteEventResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.removeComsysOfFaction = function (eventId, factionPIN, comsysId) {
		MasterStubService.deleteEvent(eventId, factionPIN, comsysId)
			.success(function (data) {
			console.log(data);
			$scope.removeComsysOfFactionResult = data.response;
		})
			.error(function (error) {
			$scope.removeComsysOfFactionResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.removeZoneOfEvent = function (eventId, zoneId) {
		MasterStubService.removeZoneOfEvent(eventId, zoneId)
			.success(function (data) {
			console.log(data);
			$scope.removeZoneOfEventResult = data.response;
		})
			.error(function (error) {
			$scope.removeZoneOfEventResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.attachCommonZoneToEvent = function (eventId, masterZoneId) {
		MasterStubService.attachCommonZoneToEvent(eventId, masterZoneId)
			.success(function (data) {
			console.log(data);
			$scope.attachCommonZoneToEventResult = data.response;
		})
			.error(function (error) {
			$scope.attachCommonZoneToEventResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.attachFactionZoneToEvent = function (eventId, factionPIN, masterZoneId) {
		MasterStubService.attachFactionZoneToEvent(eventId, factionPIN, masterZoneId)
			.success(function (data) {
			console.log(data);
			$scope.attachFactionZoneToEventResult = data.response;
		})
			.error(function (error) {
			$scope.attachFactionZoneToEventResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.prestartEvent = function (eventId) {
		MasterStubService.prestartEvent(eventId)
			.success(function (data) {
			console.log(data);
			$scope.prestartEventResult = data.response;
		})
			.error(function (error) {
			$scope.prestartEventResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.startEvent = function (eventId) {
		MasterStubService.startEvent(eventId)
			.success(function (data) {
			console.log(data);
			$scope.startEventResult = data.response;
		})
			.error(function (error) {
			$scope.startEventResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.pauseEvent = function (eventId) {
		MasterStubService.pauseEvent(eventId)
			.success(function (data) {
			console.log(data);
			$scope.pauseEventResult = data.response;
		})
			.error(function (error) {
			$scope.pauseEventResult = 'Unable to load data: ' + error;
		});
	};
	
	$scope.stopEvent = function (eventId) {
		MasterStubService.stopEvent(eventId)
			.success(function (data) {
			console.log(data);
			$scope.stopEventResult = data.response;
		})
			.error(function (error) {
			$scope.stopEventResult = 'Unable to load data: ' + error;
		});
	};
	
});
