//controllers
weatherApp.controller('homeController',['$scope','cityService', function($scope,cityService){
	
	$scope.city = cityService.city;
	
	$scope.$watch('city',function(){
		cityService.city = $scope.city;
	});
	
}]);

//Initialising scope variables
weatherApp.controller('forecastController',['$scope','$resource','$routeParams','cityService', function($scope, $resource, $routeParams, cityService){
	
	$scope.city=cityService.city;
	//setting how many days of weather we need to display first.
	 $scope.days = $routeParams.days || 2;
    //calling open weather api in JSON format
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=dd87770b1f26f9a8e61827ad888d8973",
	{ callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    //getting city and days
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    //converting degrees from fahrenheit
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round( (degK - 273.15));
        
    }
    // convert to date
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
	
}]);