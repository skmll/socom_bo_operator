app.factory('MasterStubService', function ($http) {

	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';
	var requestPost = 
	{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
	}

	return {
		login: function (username, password) {
			requestPost.url = baseUrl + 'master/login';
			requestPost.params = { username: escape(username), password: escape(password) };
			return $http(requestPost);
		},

		loginCheckMaster: function () {
			var url = baseUrl + 'master/login/check';
			return $http.get(url);
		},

		logoutMaster: function () {
			var url = baseUrl + 'master/logout';
			return $http.get(url);
		},

		createMaster: function (email, password, nickname, logo,
				phone, address, zipcode, country, association_description, association_link, association_link_promo  ){
			requestPost.url = baseUrl + 'master/create';
			requestPost.params = { email: escape(email), password: escape(password), nickname: escape(nickname),
					logo: escape(logo), phone: escape(phone),address: escape(address),zipcode: escape(zipcode),country: escape(country),
					association_description: escape(association_description),association_link: escape(association_link),
					association_link_promo: escape(association_link_promo)};
			return $http(requestPost);
		},

		updateMasterPersonalConfig: function (display_grid, coord_format, nickname, logo, 
				phone, address, zipcode, country, association_description, association_link, association_link_promo) {
			requestPost.url = baseUrl + 'master/config/personal/update';
			requestPost.params = { display_grid: display_grid, coord_format: coord_format, nickname: nickname,
					logo: logo, phone: phone, address: address, zipcode: zipcode, country: country,
					association_description: association_description, association_link: association_link, 
					association_link_promo: association_link_promo};
			return $http(requestPost);
		},

		getAllMasterSponsors: function(){
			var url = baseUrl + 'master/sponsor/get/all';
			return $http.get(url);	
		},

		changeMasterPassword: function (oldPassword, newPassword) {
			requestPost.url = baseUrl + 'master/password/update';
			requestPost.params = { old: escape(oldPassword), new: escape(newPassword) };
			return $http(requestPost);
		},

		updateMasterSponsor: function (sponsorID, name, logo) {
			requestPost.url = baseUrl + 'master/sponsor/update/' + sponsorID;
			requestPost.params = { name: escape(name), logo: escape(logo) };
			return $http(requestPost);
		},

		deleteMasterSponsor: function(masterSponsor) {
			return $http.get(baseUrl + 'master/sponsor/delete/' + masterSponsor.IDSponsor);
		},

		getAllPerks: function() {
			return $http.get(baseUrl + 'master/perk/get/all');
		},

		getMasterSponsorByName: function (name) {
			return $http.get(baseUrl + 'master/sponsor/get/name/' + name);
		},

		createMasterSponsor: function(name, logo) {
			requestPost.url = baseUrl + 'master/sponsor/create';
			requestPost.params = { name: escape(name), logo: escape(logo) };
			return $http(requestPost);
		},

		
		getPerksByName:  function(name) {
			return $http.get(baseUrl +  'master/perk/get/name/'+name);			

		},
		
		getPerkByID:  function(perkID) {
			return $http.get(baseUrl +  'master/perk/get/id/'+perkID);			

		},
		
		createMasterPerkRuleSet: function(description) {
			requestPost.url = baseUrl + 'master/perk/ruleset/create';
			requestPost.params = { description: escape(description)};
			return $http(requestPost);
		},
		
		updateMasterPerkRuleSet: function(description, perkRuleSetID) {
			requestPost.url = baseUrl + 'master/perk/ruleset/update/'+perkRuleSetID;
			requestPost.params = { description: escape(description)};
			return $http(requestPost);
		},
		
		deleteMasterPerkRuleSet: function(IDPerkRuleSet) {
			return $http.get(baseUrl +  'master/perk/ruleset/delete/'+IDPerkRuleSet);	
		},
		
		getAllMasterPerkRuleSets: function() {
			return $http.get(baseUrl +  'master/perk/ruleset/get/all');	
		},
		
		createPerkRuleSetRule:function(master_perk_rule_id, perk_id, p_initial_time_delay, 
		p_cooldown_time, p_duration_time, p_vision_range, p_detection_range, p_max_units, p_cost) {
			requestPost.url = baseUrl + 'master/perk/ruleset/rule/create';
			requestPost.params = { desmaster_perk_rule_idription: escape(master_perk_rule_id), 
			perk_id: escape(perk_id),p_initial_time_delay: escape(p_initial_time_delay),
			 p_cooldown_time: escape(p_cooldown_time), p_duration_time: escape(p_duration_time),
			p_vision_range: escape(p_vision_range), p_detection_range: escape(p_detection_range), 
			p_max_units: escape(p_max_units),p_cost: escape(p_cost)
			};
			return $http(requestPost);
		},
		
		updatePerkRuleSetRule:function(master_perk_rule_id, perk_id, p_initial_time_delay, 
		p_cooldown_time, p_duration_time, p_vision_range, p_detection_range, p_max_units, p_cost) {
			requestPost.url = baseUrl + 'master/perk/ruleset/rule/create';
			requestPost.params = { desmaster_perk_rule_idription: escape(master_perk_rule_id), 
			perk_id: escape(perk_id),p_initial_time_delay: escape(p_initial_time_delay),
			 p_cooldown_time: escape(p_cooldown_time), p_duration_time: escape(p_duration_time),
			p_vision_range: escape(p_vision_range), p_detection_range: escape(p_detection_range), 
			p_max_units: escape(p_max_units),p_cost: escape(p_cost)
			};
			return $http(requestPost);
		},
		
		deletePerkRuleSetRule: function(IDPerkRule) {
			return $http.get(baseUrl +  'master/perk/ruleset/rule/delete/'+IDPerkRule);	
		},
		
		getPerkRuleSetRulesByPerkRuleSetID: function(IDPerkRuleSet) {
			return $http.get(baseUrl +  'master/perk/ruleset/rule/get/id/'+IDPerkRuleSet);	
		},
		
		getMasterZoneByID: function(IDMasterZone) {
			return $http.get(baseUrl +  'master/zone/get/id/'+IDMasterZone);	
		},
		
		getMasterZoneByZoneTypeID: function(IDMasterZone) {
			return $http.get(baseUrl +  'master/zone/get/type/id/'+IDMasterZone);	
		},
		
		createZoneType: function (name) {
			requestPost.url = baseUrl + 'master/zone/type/create';
			requestPost.params = { name: escape(name) };
			return $http(requestPost);
		},
		
		updateZoneType: function (ID, newName) {
			requestPost.url = baseUrl + 'master/zone/type/update/' + ID;
			requestPost.params = { name: escape(newName) };
			return $http(requestPost);
		},
		
		deleteZoneType: function (ID) {
			return $http.get(baseUrl + 'master/zone/type/delete/' + ID);
		},
		
		getAllZoneTypes: function () {
			return $http.get(baseUrl + 'master/zone/type/get/all');
		},
		
		getServerDefinedZoneTypes : function () {
			return $http.get(baseUrl + 'master/zone/type/get/server/defined');
		},
		
		getMasterDefinedZoneTypes : function () {
			return $http.get(baseUrl + 'master/zone/type/get/master/defined');
		},
		
		getZoneTypesByName : function (name) {
			return $http.get(baseUrl + 'master/zone/type/get/name/' + name);
		},
		
		getZoneTypeByID : function (ID) {
			return $http.get(baseUrl + 'master/zone/type/get/id/' + ID);
		},
		
		createMasterZone : function (ID, description, capture_points) {
			requestPost.url = baseUrl + 'master/zone/create';
			requestPost.params = { zone_id: escape(ID), description: escape(description), capture_points: escape(capture_points) };
			return $http(requestPost);
		},
		
		updateMasterZone : function (ID, description, capture_points) {
			requestPost.url = baseUrl + 'master/zone/update/' + ID;
			requestPost.params = { zone_id: escape(ID), description: escape(description), capture_points: escape(capture_points) };
			return $http(requestPost);
		},
		
		deleteMasterZone : function (ID) {
			return $http.get(baseUrl + 'master/zone/delete/' + ID);
		},
		
		getAllMasterZones : function () {
			return $http.get(baseUrl + 'master/zone/get/all');
		},
		
		attachPerkRuleSetToEvent: function(eventId, perkRuleSetId) {
			return $http.get(baseUrl + 'event/' + eventId + '/ruleset/perk/attach/' + perkRuleSetId);
		},

		removePerkRuleSetOfEvent: function(eventId) {
			return $http.get(baseUrl + 'event/' + eventId + '/ruleset/perk/remove');
		},

		attachTacticalActionRuleSetToEvent: function(eventId, tacticalActionRuleSetId) {
			return $http.get(baseUrl + 'event/' + eventId + '/ruleset/tacticalaction/attach/' + tacticalActionRuleSetId);
		},

		removeTactionalRuleSetOfEvent: function(eventId) {
			return $http.get(baseUrl + 'event/' + eventId + '/ruleset/tacticalaction/remove');
		}

	};
	
});
