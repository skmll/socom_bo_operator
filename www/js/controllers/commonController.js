app.controller('CommonController', function ($scope, CommonStubService) {

	$scope.getAllEvents = function () {
		CommonStubService.getAllEvents()
			.success(function (data) {
			console.log(data);
			$scope.getAllEventsResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getAllEventsResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getEventsByMasterID = function (masterId) {
		CommonStubService.getEventsByMasterID(masterId)
			.success(function (data) {
			console.log(data);
			$scope.getEventsByMasterIDResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getEventsByMasterIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllFactions = function (eventId) {
		CommonStubService.getAllFactions(eventId)
			.success(function (data) {
			console.log(data);
			$scope.getAllFactionsResult = data.response;
		})
			.error(function (error) {
			$scope.getAllFactionsResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getEventsByYear = function (year) {
		CommonStubService.getEventsByYear(year)
			.success(function (data) {
			console.log(data);
			$scope.getEventsByYearResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getEventsByYearResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getEventsByYearAndMonth = function (year, month) {
		CommonStubService.getEventsByYearAndMonth(year, month)
			.success(function (data) {
			console.log(data);
			$scope.getEventsByYearAndMonthResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getEventsByYearAndMonthResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getEventByID = function (eventId) {
		CommonStubService.getEventByID(eventId)
			.success(function (data) {
			console.log(data);
			$scope.getEventByIDResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getEventByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllEventSponsors = function (eventId) {
		CommonStubService.getAllEventSponsors(eventId)
			.success(function (data) {
			console.log(data);
			$scope.getAllEventSponsorsResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getAllEventSponsorsResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getPerkRuleSetOfEvent = function (eventId) {
		CommonStubService.getPerkRuleSetOfEvent(eventId)
			.success(function (data) {
			console.log(data);
			$scope.getPerkRuleSetOfEventResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getPerkRuleSetOfEventResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getTacticalActionRuleSetOfEvent = function (eventId) {
		CommonStubService.getTacticalActionRuleSetOfEvent(eventId)
			.success(function (data) {
			console.log(data);
			$scope.getTacticalActionRuleSetOfEventResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getTacticalActionRuleSetOfEventResult = 'Unable to load data: ' + error;
		});
	};


	$scope.getAllFactionComsys = function (eventId, PINFaction) {
		CommonStubService.getAllFactionComsys(eventId, PINFaction)
			.success(function (data) {
			console.log(data);
			$scope.getAllFactionComsysResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getAllFactionComsysResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getFactionComsysByID = function (eventId, PINFaction, IDComsys) {
		CommonStubService.getFactionComsysByID(eventId, PINFaction, IDComsys)
			.success(function (data) {
			console.log(data);
			$scope.getFactionComsysByIDResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getFactionComsysByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllCommonZones = function (eventId) {
		CommonStubService.getAllCommonZones(eventId)
			.success(function (data) {
			console.log(data);
			$scope.getAllCommonZonesResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getAllCommonZonesResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getCommonZoneByID = function (eventId, eventZoneID) {
		CommonStubService.getCommonZoneByID(eventId, eventZoneID)
			.success(function (data) {
			console.log(data);
			$scope.getCommonZoneByIDResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getCommonZoneByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getCoordCommonZoneByID = function (eventId, eventZoneID) {
		CommonStubService.getCoordCommonZoneByID(eventId, eventZoneID)
			.success(function (data) {
			console.log(data);
			$scope.getCoordCommonZoneByIDResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getCoordCommonZoneByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllFactionZones = function (eventId, factionPIN) {
		CommonStubService.getAllFactionZones(eventId, factionPIN)
			.success(function (data) {
			console.log(data);
			$scope.getAllFactionZonesResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getAllFactionZonesResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getMap = function (eventId) {
		CommonStubService.getMap(eventId)
			.success(function (data) {
			console.log(data);
			$scope.getMapResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getMapResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getCoordFactionZonesByID = function (eventId, factionPIN, eventZoneId) {
		CommonStubService.getCoordFactionZonesByID(eventId, factionPIN, eventZoneId)
			.success(function (data) {
			console.log(data);
			$scope.getCoordFactionZonesByIDResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getCoordFactionZonesByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getFactionSquadByID = function (eventId, factionPIN, squadId) {
		CommonStubService.getFactionSquadByID(eventId, factionPIN, squadId)
			.success(function (data) {
			console.log(data);
			$scope.getFactionSquadByIDResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getFactionSquadByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllOperatorsOfSquad = function (eventId, factionPIN, squadId) {
		CommonStubService.getAllOperatorsOfSquad(eventId, factionPIN, squadId)
			.success(function (data) {
			console.log(data);
			$scope.getAllOperatorsOfSquadResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getAllOperatorsOfSquadResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getFactionZonesByID = function (eventId, factionPIN, eventZoneId) {
		CommonStubService.getFactionZonesByID(eventId, factionPIN, eventZoneId)
			.success(function (data) {
			console.log(data);
			$scope.getFactionZonesByIDResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getFactionZonesByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllFactionSquads = function (eventId, factionPIN) {
		CommonStubService.getAllFactionSquads(eventId, factionPIN)
			.success(function (data) {
			console.log(data);
			$scope.getAllFactionSquadsResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getAllFactionSquadsResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getOperatorOfSquadByID = function (eventId, factionPIN, squadId, IDOperator) {
		CommonStubService.getOperatorOfSquadByID(eventId, factionPIN, squadId, IDOperator)
			.success(function (data) {
			console.log(data);
			$scope.getOperatorOfSquadByIDResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getOperatorOfSquadByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllFactionsScore = function (eventId) {
		CommonStubService.getAllFactionsScore(eventId)
			.success(function (data) {
			console.log(data);
			$scope.getAllFactionsScoreResult = data.response;
		})
			.error(function (error) {
			console.log(error);
			$scope.getAllFactionsScoreResult = 'Unable to load data: ' + error;
		});
	};

	$scope.addResponseToEventResponseList = function (eventId, notificationId, response) {
		CommonStubService.addResponseToEventResponseList(eventId, notificationId, response);
	};

	$scope.addResponseToFactionResponseList = function (eventId, factionId, notificationId, response) {
		CommonStubService.addResponseToEventResponseList(eventId, factionId, notificationId, response);
	};

	$scope.addResponseToOperatorResponseList = function (eventId, factionId, operatorId, notificationId, response) {
		CommonStubService.addResponseToEventResponseList(eventId, factionId, operatorId, notificationId, response);
	};

});
