angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/lobby', {
			templateUrl: 'views/lobby.html',
			controller: 'LobbyController'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'	
		});

	$locationProvider.html5Mode(true);

}]); 