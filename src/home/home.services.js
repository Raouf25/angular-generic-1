'use strict';

angular.module('app.core')

.service('nametab', function () {
  return  ["toto1 ","totoazeazeazea","toto3"];
  })


.service('AllUsers', ['$http', function ($http) {
return   $http({
		method  : 'GET',
		url     : 'http://localhost:8888/user/all',
		headers : {'Content-Type': 'application/json'}
  });
  
}]);
