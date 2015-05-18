app.factory('CommonStubService', ['$http', '$rootScope', '$cordovaBatteryStatus',
 function ($http, $rootScope, $cordovaBatteryStatus) {

	// Battery events
	$rootScope.$on('$cordovaBatteryStatus:status', function (result) {
		data.batteryLevel = result.level;       // (0 - 100)
		data.isPluggedIn  = result.isPlugged;   // bool
	});
	
	$rootScope.$on('$cordovaBatteryStatus:critical', function (result) {
		data.batteryLevel = result.level;       // (0 - 100)
		data.isPluggedIn  = result.isPlugged;   // bool
	});
	
	$rootScope.$on('$cordovaBatteryStatus:low', function (result) {
		data.batteryLevel = result.level;       // (0 - 100)
		data.isPluggedIn  = result.isPlugged;   // bool
	});
	
	var data = {};
	data.batteryLevel = -1;
	data.isPluggedIn = false;

	data.getBatteryLevel = function(){
		return data.batteryLevel;
	};
	
	data.getAllEvents = function(){
		return $http.get('http://192.168.234.37/SOCOM_BO/public/v0/event/get/all');
	};
	
	data.getEvent = function(event){
		return $http.get('http://192.168.234.37/SOCOM_BO/public/v0/event/get', event.IDEvent);
	}
	
	
	return data;
}]);