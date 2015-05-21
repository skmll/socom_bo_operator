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

				deleteMasterSponsor: function(sponsorID) {
					return $http.get(baseUrl + 'master/sponsor/delete/' + sponsorID);
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


				getPerksByName:  function() {
					return $http.get(baseUrl +  'master/perk/get/name/{name}');			

				},

				getPerkByID:  function() {
					return $http.get(baseUrl +  'master/perk/get/id/{IDPerk}');			

				},

				createMasterPerkRuleSet: function(description) {
					requestPost.url = baseUrl + 'master/perk/ruleset/create';
					requestPost.params = { description: escape(description)};
					return $http(requestPost);
				},

				updateMasterPerkRuleSet: function(description) {
					requestPost.url = baseUrl + 'master/perk/ruleset/update/{IDPerkRuleSet}';
					requestPost.params = { description: escape(description)};
					return $http(requestPost);
				},

				deleteMasterPerkRuleSet: function() {
					return $http.get(baseUrl +  'master/perk/ruleset/delete/{IDPerkRuleSet}');	
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

				deletePerkRuleSetRule: function() {
					return $http.get(baseUrl +  'master/perk/ruleset/rule/delete/{IDPerkRule}');	
				},

				getPerkRuleSetRulesByPerkRuleSetID: function() {
					return $http.get(baseUrl +  'master/perk/ruleset/rule/get/id/{IDPerkRuleSet}');	
				},

				getMasterZoneByID: function() {
					return $http.get(baseUrl +  'master/zone/get/id/{masterZoneId}');	
				},

				getMasterZoneByZoneTypeID: function() {
					return $http.get(baseUrl +  'master/zone/get/type/id/{IDZoneType}');	
				},

				createZoneType: function (name) {
					requestPost.url = baseUrl + 'master/zone/type/create';
					requestPost.params = { name: escape(name) };
					return $http(requestPost);
				},

				updateZoneType: function (zoneTypeId, newName) {
					requestPost.url = baseUrl + 'master/zone/type/update/' + zoneTypeId;
					requestPost.params = { name: escape(newName) };
					return $http(requestPost);
				},

				deleteZoneType: function (zoneTypeId) {
					return $http.get(baseUrl + 'master/zone/type/delete/' + zoneTypeId);
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

				getZoneTypeByID : function (zoneTypeId) {
					return $http.get(baseUrl + 'master/zone/type/get/id/' + zoneTypeId);
				},

				createMasterZone : function (zoneTypeId, description, capturePoints) {
					requestPost.url = baseUrl + 'master/zone/create';
					requestPost.params = { zone_id: escape(zoneTypeId), description: escape(description), capture_points: escape(capturePoints) };
					return $http(requestPost);
				},

				updateMasterZone : function (masterZoneId, zoneTypeId, description, capturePoints) {
					requestPost.url = baseUrl + 'master/zone/update/' + masterZoneId;
					requestPost.params = { zone_id: escape(zoneTypeId), description: escape(description), capture_points: escape(capturePoints) };
					return $http(requestPost);
				},

				deleteMasterZone : function (masterZoneId) {
					return $http.get(baseUrl + 'master/zone/delete/' + masterZoneId);
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
				},

				createZoneCoord: function(masterPersonalZoneId, lat_c, lat_d, lat_m, lat_s, lng_c, lng_d, lng_m, lng_s) {
					requestPost.url = baseUrl + 'master/zone/coord/create';
					requestPost.params = {IDMasterPersonalZone: escape(masterPersonalZoneId), lat_c: escape(lat_c), lat_d: escape(lat_d), lat_m: escape(lat_m), lat_s: escape(lat_s), lng_c: escape(lng_c), lng_d: escape(lng_d), lng_m: escape(lng_m), lng_s: escape(lng_s)};
					return $http(requestPost);
				},

				updateZoneCoord: function(coordId, masterPersonalZoneId, lat_c, lat_d, lat_m, lat_s, lng_c, lng_d, lng_m, lng_s) {
					requestPost.url = baseUrl + 'master/zone/coord/update/' + coordId;
					requestPost.params = {IDMasterPersonalZone: escape(masterPersonalZoneId), lat_c: escape(lat_c), lat_d: escape(lat_d), lat_m: escape(lat_m), lat_s: escape(lat_s), lng_c: escape(lng_c), lng_d: escape(lng_d), lng_m: escape(lng_m), lng_s: escape(lng_s)};
					return $http(requestPost);
				},

				deleteZoneCoord: function(coordId) {
					return $http.get(baseUrl + 'master/zone/coord/delete/' + coordId);
				},

				getZoneCoordByID: function(coordId) {
					return $http.get(baseUrl + 'master/zone/coord/get/id/' + coordId);
				},

				getZoneCoordByMasterZoneID: function(masterZoneId) {
					return $http.get(baseUrl + 'master/zone/coord/get/zone/id/' + masterZoneId);
				},

				getAllMasterEvents: function() {
					return $http.get(baseUrl + 'master/event/get/all');
				},

				getMasterEventByID: function(eventId) {
					return $http.get(baseUrl + 'master/event/get/id/' + eventId);
				},


				createEvent: function(description_briefing, address, rules, prohibitions, proceedment, additional_informations, registration_date_start, registration_date_end, event_date_start, event_date_end, operator_inicial_perk_points, max_comsys_per_faction, max_operators_per_faction, respawn_delay, gps_refresh_rate_min, gps_refresh_rate_max, see_enemies_bases, see_enemies_respawn) {
					requestPost.url = baseUrl + 'event/create';
					requestPost.params = {description_briefing: escape(description_briefing), address: escape(address), rules: escape(rules), prohibitions: escape(prohibitions), proceedment: escape(proceedment), additional_informations: escape(additional_informations), registration_date_start: escape(registration_date_start), registration_date_end: escape(registration_date_end), event_date_start: escape(event_date_start), event_date_end: escape(event_date_end), operator_inicial_perk_points: escape(operator_inicial_perk_points), max_comsys_per_faction: escape(max_comsys_per_faction), max_operators_per_faction: escape(max_operators_per_faction), respawn_delay: escape(respawn_delay), gps_refresh_rate_min: escape(gps_refresh_rate_min), gps_refresh_rate_max: escape(gps_refresh_rate_max), see_enemies_bases: escape(see_enemies_bases), see_enemies_reswap: escape(see_enemies_respawn)};
					return $http(requestPost);
				},

				updateEvent: function(eventId, description_briefing, address, rules, prohibitions, proceedment, additional_informations, registration_date_start, registration_date_end, event_date_start, event_date_end, operator_inicial_perk_points, max_comsys_per_faction, max_operators_per_faction, respawn_delay, gps_refresh_rate_min, gps_refresh_rate_max, see_enemies_bases, see_enemies_respawn) {
					requestPost.url = baseUrl + 'event/update/' + eventId;
					requestPost.params = {description_briefing: escape(description_briefing), address: escape(address), rules: escape(rules), prohibitions: escape(prohibitions), proceedment: escape(proceedment), additional_informations: escape(additional_informations), registration_date_start: escape(registration_date_start), registration_date_end: escape(registration_date_end), event_date_start: escape(event_date_start), event_date_end: escape(event_date_end), operator_inicial_perk_points: escape(operator_inicial_perk_points), max_comsys_per_faction: escape(max_comsys_per_faction), max_operators_per_faction: escape(max_operators_per_faction), respawn_delay: escape(respawn_delay), gps_refresh_rate_min: escape(gps_refresh_rate_min), gps_refresh_rate_max: escape(gps_refresh_rate_max), see_enemies_bases: escape(see_enemies_bases), see_enemies_reswap: escape(see_enemies_respawn)};
					return $http(requestPost);
				},

				deleteEvent: function(eventId) {
					return $http.get(baseUrl + 'event/delete/' + eventId);
				}

			}

		});
