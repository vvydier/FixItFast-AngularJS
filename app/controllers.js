'use strict';

angular.module('fixItFast.controller',[])
	.controller('FixItFastController', ["$scope", function($scope){
//		$scope.helloWorld="Hello World!";

		$scope.newTask = "";
		$scope.taskList = [
			{description:"Buy airplane tickets", done:false},
			{description:"Make hotel reservations", done:false},
			{description:"Chill", done:false}
		];

	}]);
