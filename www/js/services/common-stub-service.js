app.factory('CommonStubService', function ($http) {

	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';
	var firebaseUrl = 'https://socom-bo-estg-2015.firebaseio.com/events_in_progress/';

	$http.defaults.withCredentials = true;

	return {

		/***** Laravel Services *****/

		getAllEvents: function () {
			return $http.get(baseUrl + 'event/get/all');
		},

		getEventsByMasterID: function (masterId) {
			return $http.get(baseUrl + 'event/get/master/' + masterId);
		},

		getEventsByYear: function (year) {
			return $http.get(baseUrl + 'event/get/year/' + year);
		},

		getEventsByYearAndMonth: function (year, month) {
			return $http.get(baseUrl + 'event/get/year/' + year + '/month/' + month);
		},

		getEventByID: function (eventId) {
			return $http.get(baseUrl + 'event/get/id/' + eventId);
		},

		getAllEventSponsors: function (eventId) {
			return $http.get(baseUrl + 'event/' + eventId + '/sponsor/get/all');
		},

		getPerkRuleSetOfEvent: function (eventId) {
			return $http.get(baseUrl + 'event/' + eventId + '/ruleset/perk/get/all');
		},

		getTacticalActionRuleSetOfEvent: function (eventId) {
			return $http.get(baseUrl + 'event/' + eventId + '/ruleset/tacticalaction/get/all');
		},

		getAllFactionComsys: function (eventId, factionPIN) {
			return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/comsys/get/all');
		},

		getFactionComsysByID: function (eventId, factionPIN, comsysId) {
			return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/comsys/get/id/' + comsysId);
		},

		getAllCommonZones: function (eventId) {
			return $http.get(baseUrl + 'event/' + eventId + '/zone/common/get/all');
		},

		getCommonZoneByID: function (eventId, eventZoneId) {
			return $http.get(baseUrl + 'event/' + eventId + '/zone/common/get/id/' + eventZoneId);
		},

		getCoordCommonZoneByID: function (eventId, eventZoneId) {
			return $http.get(baseUrl + 'event/' + eventId + '/zone/common/coord/get/id/' + eventZoneId);
		},

		getAllFactionZones: function (eventId, factionPIN) {
			return $http.get(baseUrl + 'event/' + eventId + '/zone/faction/' + factionPIN + '/get/all');
		},

		getMap: function (eventId) {
			return $http.get(baseUrl + 'event/' + eventId + '/map/get');
		},

		getCoordFactionZonesByID: function (eventId, factionPIN, eventZoneId) {
			return $http.get(baseUrl + 'event/' + eventId + '/zone/faction/' + factionPIN + '/coord/get/id/' + eventZoneId);
		},

		getFactionSquadByID: function (eventId, factionPIN, squadId) {
			return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/squad/get/id/' + squadId);
		},

		getAllOperatorsOfSquad: function (eventId, factionPIN, squadId) {
			return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/squad/' + squadId + '/operators/get/all');
		},

		getFactionZonesByID: function (eventId, factionPIN, eventZoneId) {
			return $http.get(baseUrl + 'event/' + eventId + '/zone/faction/' + factionPIN + '/get/id/' + eventZoneId);
		},

		getAllFactionSquads: function (eventId, factionPIN) {
			return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/squad/get/all');
		},

		getOperatorOfSquadByID: function (eventId, factionPIN, squadId, operatorId) {
			return $http.get(baseUrl + 'event/' + eventId + '/faction/' + factionPIN + '/squad/' + squadId + '/operators/get/id/' + operatorId);
		},

		getAllFactionsScore: function (eventId) {
			return $http.get(baseUrl + 'event/' + eventId + '/faction/get/scores');
		},
		
		/***** Firebase Services *****/

		addResponseToEventResponseList: function (eventId, notificationId, response) {
			var ref = new Firebase(firebaseUrl + eventId + '/event_notifications/' + notificationId);
			ref.push({
				response: response
			});
		},

		addResponseToFactionResponseList: function (eventId, factionId, notificationId, response) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/faction_notifications/' + notificationId);
			ref.push({
				response: response
			});
		},

		addResponseToOperatorResponseList: function (eventId, factionId, operatorId, notificationId, response) {
			var ref = new Firebase(firebaseUrl + eventId + '/factions/' + factionId + '/operators/' + operatorId + '/operator_notifications/' + notificationId);
			ref.push({
				response: response
			});
		}

	};

});
