angular.module('proWebApp')
	.controller('passGenCtrl', function($scope){
		$scope.randPassArray = [];
		$scope.lowNum = 8;
		$scope.highNum = 128;
		$scope.charNum = [];
		$scope.lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	})