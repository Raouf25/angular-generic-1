'use strict';

angular.module('app.core')

// .controller('Project1Controller',[function(){
//
// }])

// For more information please see this  http://jtblin.github.io/angular-chart.js/
.controller("LineCtrl2", ['$scope',function ($scope) {

  $scope.labels2 = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B', 'Series C'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [40, 55, 56, 81, 80, 59, 65],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }
  // , { yAxisID: 'y-axis-2' }
];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
        //,
        // {
        //   id: 'y-axis-2',
        //   type: 'linear',
        //   display: true,
        //   position: 'left'
        // }
      ]
    }
  };
}]);
