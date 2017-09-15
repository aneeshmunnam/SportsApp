var sportsApp = angular.module('sportsApp',['ngRoute']);

sportsApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: 'AthletesController',
		templateUrl: 'views/athletes.html'
	})
	.when('/athletes', {
		controller: 'AthletesController',
		templateUrl: 'views/athletes.html'	
	})
	.when('/athletes/get_athlete/:id', {
		controller: 'AthletesController',
		templateUrl: 'views/athlete_details.html'	
	})
	.when('/athletes/create', {
		controller: 'AthletesController',
		templateUrl: 'views/create_athlete.html'
	})
	.when('/athletes/edit/:id',{
		controller: 'AthletesController',
		templateUrl: 'views/athlete_update.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});