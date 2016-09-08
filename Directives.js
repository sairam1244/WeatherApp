//Directives

weatherApp.directive('weatherReport', function(){
	return{
		restrict :'E',
		templateUrl:'Directives/WeatherReport.html',
		replace: true,
		scope:{
			weatherDay : "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
});
