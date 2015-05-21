app.factory('CommonStubService', function ($http) {

	var baseUrl = 'http://192.168.234.37/SOCOM_BO/public/v1/';

	return {
		
		getAllEvents: function(){
			return $http.get(baseUrl + 'event/get/all');
		},

		getEventsByMasterID: function(masterId){
			return $http.get(baseUrl + 'event/get/master/' + masterId);
		},

		getEventsByYear: function(year){
			return $http.get(baseUrl + 'event/get/year/' + year);
		},

		getEventsByYearAndMonth: function(year, month){
			return $http.get(baseUrl + 'event/get/year/' + year + '/month/' + month);
		},

		getEventByID: function(eventId){
			return $http.get(baseUrl + 'event/get/id/' + eventId);
		},

		getAllEventSponsors: function(eventId){
			return $http.get(baseUrl + 'event/' + eventId + '/sponsor/get/all');
		},

		getPerkRuleSetOfEvent: function(eventId){
			return $http.get(baseUrl + 'event/' + eventId + '/ruleset/perk/get/all');
		},

		getTacticalActionRuleSetOfEvent: function(eventId){
			return $http.get(baseUrl + 'event/' + eventId + '/ruleset/tacticalaction/get/all');
		}
	};
	
});
