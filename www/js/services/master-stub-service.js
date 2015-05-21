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

		removeSponsorOfEvent: function (IDEvent, IDSponsor) {
			return $http.get(baseUrl + 'event/' + IDEvent + '/sponsor/remove/' + IDSponsor);
		},

		attachSponsorToEvent: function (IDEvent, IDSponsor) {
			return $http.get(baseUrl + 'event/' + IDEvent + '/sponsor/attach/' + IDSponsor);
		},

		getTacticalActionRuleSetRulesByTacticalActionRuleSetID: function (IDTacticalActionRuleSet) {
			return $http.get(baseUrl + 'master/tacticalaction/ruleset/rule/get/id/' + IDTacticalActionRuleSet);
		},

		deleteTacticalActionRuleSetRule: function (IDTacticalActionRule) {
			return $http.get(baseUrl + 'master/tacticalaction/ruleset/rule/delete/' + IDTacticalActionRule);
		},

		getAllMasterTacticalActionRuleSets: function () {
			return $http.get(baseUrl + 'master/tacticalaction/ruleset/get/all');
		},

		deleteMasterTacticalActionRuleSet: function (IDTacticalActionRuleSet) {
			return $http.get(baseUrl + 'master/tacticalaction/ruleset/delete/' + IDTacticalActionRuleSet);
		},

		getTacticalActionByID: function (IDTacticalAction) {
			return $http.get(baseUrl + 'master/tacticalaction/get/id/' + IDTacticalAction);
		},

		getTacticalActionsByName: function (name) {
			return $http.get(baseUrl + 'master/tacticalaction/get/name/' + name);
		},

		getAllTacticalActions: function () {
			return $http.get(baseUrl + 'master/tacticalaction/get/all');
		},

		createMasterTacticalActionRuleSet: function(description) {
			requestPost.url = baseUrl + 'master/tacticalaction/ruleset/create';
			requestPost.params = { description: escape(description) };
			return $http(requestPost);
		},

		updateMasterTacticalActionRuleSet: function (IDTacticalActionRuleSet, description) {
			requestPost.url = baseUrl + 'master/tacticalaction/ruleset/update/' + IDTacticalActionRuleSet;
			requestPost.params = { description: escape(description) };
			return $http(requestPost);
		},

		createTacticalActionRuleSetRule: function (master_tacticalaction_rule_id, tacticalaction_id, ta_initial_time_delay, ta_cooldown_time, ta_duration_time, ta_vision_range, ta_detection_range, ta_death_range, ta_cost) {
			requestPost.url = baseUrl + 'master/tacticalaction/ruleset/rule/create';
			requestPost.params = {
					master_tacticalaction_rule_id: escape(master_tacticalaction_rule_id),
					tacticalaction_id: escape(tacticalaction_id),
					ta_initial_time_delay: escape(ta_initial_time_delay),
					ta_cooldown_time: escape(ta_cooldown_time),
					ta_duration_time: escape(ta_duration_time),
					ta_vision_range: escape(ta_vision_range),
					ta_detection_range: escape(ta_detection_range),
					ta_death_range: escape(ta_death_range),
					ta_cost: escape(ta_cost)					
			};
			return $http(requestPost);
		},

		updateTacticalActionRuleSetRule: function (IDTacticalActionRule, master_tacticalaction_rule_id, tacticalaction_id, ta_initial_time_delay, ta_cooldown_time, ta_duration_time, ta_vision_range, ta_detection_range, ta_death_range, ta_cost) {
			requestPost.url = baseUrl + 'master/tacticalaction/ruleset/rule/update/' + IDTacticalActionRule;
			requestPost.params = {
					master_tacticalaction_rule_id: escape(master_tacticalaction_rule_id),
					tacticalaction_id: escape(tacticalaction_id),
					ta_initial_time_delay: escape(ta_initial_time_delay),
					ta_cooldown_time: escape(ta_cooldown_time),
					ta_duration_time: escape(ta_duration_time),
					ta_vision_range: escape(ta_vision_range),
					ta_detection_range: escape(ta_detection_range),
					ta_death_range: escape(ta_death_range),
					ta_cost: escape(ta_cost)					
			};
			return $http(requestPost);
		}

	}

});
