'use strict';

angular.module('app.core')

.controller('SignupController',  ["$scope","$http","$location","SignupUser","$rootScope", function  ($scope, $http, $location,SignupUser,$rootScope) {
    // create a blank object to handle form data.
      $scope.formModel = {};

    // calling our submit function.
      $scope.onSubmit = function(){
        SignupUser.getFormUser($scope.formModel).then(function(data) {
                        if (data.errors) {
                          // Showing errors.
                          //$scope.errorName = data.errors.name;
                          //$scope.errorUserName = data.errors.username;
                        //  $scope.errorEmail = data.errors.email;
                          $scope.message = data.errors;
                        } else {
                          $scope.message = data.message;
                          console.log("ok message is sent");
                          console.log($scope.formModel);

                          var root_path = $location.protocol()+"//:"+$location.host()+":"+$location.port() ;
                          console.log(root_path);

                          console.log("brodcasted value "+$scope.formModel.firstName);
                            var Context = {
                              Connected_user : $scope.formModel.firstName ,
                              is_connected : true
                            };

                          $rootScope.$broadcast('Context', Context);
                          $location.path(root_path+"/home");

                        }
                      });
                    }

  }]);
