var sportsApp = angular.module('sportsApp');

sportsApp.controller('AthletesController',['$scope','$location','$http','$routeParams',function($scope,$location,$http,$routeParams){
	$scope.getAthletes = function(){
		$http.get('/athletes/list').success(function(response){
			$scope.athletes = response;
		});
	}

	$scope.getAthlete = function(){
		var id = $routeParams.id;
		$http.get('/athletes/get_athlete/'+id).success(function(response){
			$scope.athlete = response;
		});
	}

	$scope.addAthlete = function(){
		//console.log($scope.athlete);
		$http.post('/athletes/create', $scope.athlete).success(function(response){
			window.location.href = '#/athletes';
		});
	}

	$scope.updateAthlete = function(){
		var id = $routeParams.id;
		$http.put('/athletes/edit/'+id, $scope.athlete).success(function(response){
			window.location.href = '#/athletes/';
		});
	}
	
}]);