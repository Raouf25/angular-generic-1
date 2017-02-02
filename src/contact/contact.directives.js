'use strict';

angular.module('app.core')

.directive('contactlist', function () {
  return {
		restrict: 'E',
        replace: true,
		transclude: true,
		scope: {
			agenda: '=data'
		},
		template:			 
				'<div ><p ng-repeat="contact in agenda">'+
				   '{{$index+1}}  <span class="glyphicon glyphicon-user"></span> {{contact.name}}'+
				   '</br><span class="marge">{{contact.phone}}</span>'+
				   '</br><span class="marge">{{contact.email}}</span>'+
				'</p></div>'
    };
});