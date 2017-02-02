'use strict';

angular.module('app.core')

.directive('customlist', function () {
  return {
		restrict: 'E',
        replace: true,
		transclude: true,
		scope: {
			names: '=data'
		},
		template: '<div>'+
						'<div ng-repeat="name in names">'+
							'<ol>'+
								'<li>{{name}}</li>'+
							'</ol>'+
						'</div>'+
					'</div>',

        link: function (scope, element, attrs) {
                // DOM manipulation/events here!
        }
    };
})

.directive('userlist', function () {
  return {
		restrict: 'E',
        replace: true,
		transclude: true,
		scope: {
			users: '=data'
		},
		template:
  '<div class="row">'+
           '<div class="col-md-3">'+
             '<div class="well" div ng-repeat="user in users">'+
              ' <p>{{$index+1}}</p>  '+
              '<p><span class="glyphicon glyphicon-user">      {{user.firstName}}   </span></p>'+
              '<span><p>{{user.lastName}}</p></span>'+
              '<span><p>    {{user.email}}</p></span> '+
						'</div>'+
            '</div>'+
					'</div>',

        link: function (scope, element, attrs) {
                // DOM manipulation/events here!
        }
    };
})

;
