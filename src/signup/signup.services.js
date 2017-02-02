'use strict';

angular.module('app.core')

.service('SignupUser', ['$http', function ($http) {
 this.getFormUser= function ( formModel){

        return $http({
          method  : 'POST',
          url     : 'http://localhost:8888/user/add',
          data    : formModel, //forms user object
          headers : {'Content-Type': 'application/json'}
          });

}
}]);
