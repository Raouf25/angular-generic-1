'use strict';

angular.module('app.core')
.controller('ContactController', ['$scope','contacts','apiKey',  function($scope,contacts,apiKey) {
	$scope.agenda= contacts;
		$scope.apiKey= apiKey;
		console.log(	$scope.apiKey);



}])
;
