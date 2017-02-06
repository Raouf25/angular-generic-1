'use strict';

angular.module('app.core')

.controller('Project2Controller',['$scope', function( $scope){

  $scope.mapOptions = {
          height: 640,
          width: 960,
          draggable: true,
          coords: {
              longitude: 13.338931,
              latitude: 52.508249
          }
      };

}]);
