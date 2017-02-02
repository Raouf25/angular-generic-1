'use strict';

angular.module('app.core')
.controller('ContactController', ['$scope','contacts', function($scope,contacts) {
	$scope.agenda= contacts;
}])
;
