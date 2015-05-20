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


	$scope.getEventsByMasterID = function(){
		CommonStubService.getEventsByMasterID('1')
		.success(function (data) {
			console.log(data);
			$scope.getEventsByMasterIDResult = data.response;
		})
		.error(function (error) {
			console.log(error);
			$scope.getEventsByMasterIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getEventsByYear = function(){
		//2015 = example of year
		CommonStubService.getEventsByYear('2015')
		.success(function (data) {
			console.log(data);
			$scope.getEventsByYearResult = data.response;
		})
		.error(function (error) {
			console.log(error);
			$scope.getEventsByYearResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getEventsByYearAndMonth = function(){
		//2015 = example of year
		//10 = example of month
		CommonStubService.getEventsByYearAndMonth('2015', '10')
		.success(function (data) {
			console.log(data);
			$scope.getEventsByYearAndMonthResult = data.response;
		})
		.error(function (error) {
			console.log(error);
			$scope.getEventsByYearAndMonthResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getEventByID = function(){
		//1 = example of event id
		CommonStubService.getEventByID('1')
		.success(function (data) {
			console.log(data);
			$scope.getEventByIDResult = data.response;
		})
		.error(function (error) {
			console.log(error);
			$scope.getEventByIDResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getAllEventSponsors = function(){
		//1 = example of event id
		CommonStubService.getAllEventSponsors('1')
		.success(function (data) {
			console.log(data);
			$scope.getAllEventSponsorsResult = data.response;
		})
		.error(function (error) {
			console.log(error);
			$scope.getAllEventSponsorsResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getPerkRuleSetOfEvent = function(){
		//1 = example of event id
		CommonStubService.getPerkRuleSetOfEvent('1')
		.success(function (data) {
			console.log(data);
			$scope.getPerkRuleSetOfEventResult = data.response;
		})
		.error(function (error) {
			console.log(error);
			$scope.getPerkRuleSetOfEventResult = 'Unable to load data: ' + error;
		});
	};

	$scope.getTacticalActionRuleSetOfEvent = function(){
		//1 = example of event id
		CommonStubService.getTacticalActionRuleSetOfEvent('1')
		.success(function (data) {
			console.log(data);
			$scope.getTacticalActionRuleSetOfEventResult = data.response;
		})
		.error(function (error) {
			console.log(error);
			$scope.getTacticalActionRuleSetOfEventResult = 'Unable to load data: ' + error;
		});
	};
	
});
