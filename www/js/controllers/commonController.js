app.controller('CommonController', function($scope, CommonStubService) {
	
	$scope.getAllEvents = function(){
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

	$scope.getEventsByMasterID = function(masterId){
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

	$scope.getEventsByYear = function(year){
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

	$scope.getEventsByYearAndMonth = function(year, month){
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

	$scope.getEventByID = function(eventId){
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

	$scope.getAllEventSponsors = function(eventId){
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

	$scope.getPerkRuleSetOfEvent = function(eventId){
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

	$scope.getTacticalActionRuleSetOfEvent = function(eventId){
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

$scope.getMap = function(IDEvent){
		CommonStubService.getMap(IDEvent)
		.success(function (data) {
			console.log(data);
			$scope.getMapResult = data.response;
		})
		.error(function (error) {
			console.log(error);
			$scope.getMapResult = 'Unable to load data: ' + error;
		});
	};
		
});
