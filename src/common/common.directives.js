'use strict';

angular.module('app.core')

.directive('navigation',function () {

   var controller = function ($scope,$rootScope,ngDialog,$location) {

     $rootScope.$on('Context', function (event, data) {
     $scope.username = data.Connected_user;
     $scope.is_connected = data.is_connected;
     console.log("listened value : "+data.Connected_user+" is he connected "+data.is_connected);
       });


     $scope.openLogoutPopup=function  () {
     console.log("it's openLogoutPopup in the controller of  common directives");
     ngDialog.open({ template: 'logout/logout.popup.html' });
    }

    $scope.openLoginPopup=function  () {
    console.log("it's openLogoutPopup in the controller of  common directives");
    ngDialog.open({ template: 'login/login.popup.html' });
   }


    // calling our ConfirmLogout function.
      $scope.onConfirmLogout = function(){
      console.log("it's onConfirmLogout in the controller of  common directives");
      var Context = {
      Connected_user : '' ,
      is_connected : false
      };
      $rootScope.$broadcast('Context', Context);
      ngDialog.close();
      var root_path = $location.protocol()+"//:"+$location.host()+":"+$location.port() ;
      $location.path(root_path+"/home");
    }

    // calling our CancelLogout function.
      $scope.onCancelLogout = function(){
      console.log("it's onCancelLogout in the controller of  common directives");
      ngDialog.close();
    }

   };


  return {
		restrict: 'E',
        replace: true,
		transclude: true,
    controller:  controller,
		template:
    '<div class="collapse navbar-collapse" id="myNavbar">'+
  '  <ul class="nav navbar-nav" >'+
      '<li class="active"><a href="#!/home">Home</a></li>'+
				'<li class="dropdown" ng-show=is_connected>'+
            '<a class="dropdown-toggle" data-toggle="dropdown" href="#">Projects <span class="caret"></span></a>'+
            '<ul class="dropdown-menu">'+
              '<li><a href="#!/projects/project_1">Project 1</a></li>'+
              '<li><a href="#!/projects/project_2">Project 2</a></li>'+
              '<li><a href="#">Project 3</a></li>'+
            '</ul>'+
        '</li>'+
          '<li ng-show=is_connected><a href="#!/contact">Contact</a></li>'+
          '<li ng-show=is_connected><a href="#">About</a></li>'+
          '</ul>'+
          '<ul ng-show=is_connected class="nav navbar-nav navbar-right">'+
            '<li><a href="#"><span class="glyphicon glyphicon-user"></span> Hello {{username}} </a></li>'+
            '<li><a ng-click="openLogoutPopup()" ><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>'+
          '</ul>'+
          '<ul ng-show=!is_connected class="nav navbar-nav navbar-right">'+
              '<li><a href="#!/signup"><span class="glyphicon glyphicon-user"></span> Sign up</a></li>'+
              '<li><a ng-click="openLoginPopup()"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>'+
          '</ul>'+
          '</div>',
    };
});
