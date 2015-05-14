app.factory('CommonStubService', ['$http', '$rootScope', '$cordovaBatteryStatus',
 function ($http, $rootScope, $cordovaBatteryStatus) {

	var data = {};
	data.batteryLevel = -1;
	data.isPluggedIn = false;

	data.getBatteryLevel = function(){
		data.batteryLevel ++;
		return data.batteryLevel;
	};
	
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
	
	return data;
}]);