'use strict';

angular.module('app.core')



.controller('HomeController', ['$scope','$http','nametab','AllUsers','$timeout' ,function($scope,$http,nametab,AllUsers,$timeout) {
	$scope.names= nametab;
	$scope.users = {};

	$scope.dataLoaded = false;

	AllUsers.then(function(response) {
													if (response.errors) {
																console.log("message is not recived");
																console.log(response.errors);
															} else {
																console.log("ok message is recived : "+response.data);
																$scope.users = response.data;
																console.log($scope.dataLoaded);
															//	$timeout(function(){$scope.dataLoaded = true;},9000,$scope);
																$scope.dataLoaded = true;
																console.log($scope.dataLoaded);
															}
														});


}])

;
