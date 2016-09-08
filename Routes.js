//Routes
weatherApp.config(function ($routeProvider) {
	
		$routeProvider
		//it routes to home page
		.when('/',{
			templateUrl:'Pages/home.htm',
			controller: 'homeController'
		})
		//it routes to forecast page
		.when('/forecast',{
			templateUrl:'Pages/forecast.htm',
			controller: 'forecastController'
		})
		//it routes to forecast and depends on selection of days.
		.when('/forecast/:days', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
});