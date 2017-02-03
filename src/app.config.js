'use strict';
angular
    .module('app.config', [])

    //what I added the provider 1st way
    .provider("apiKey", [function () {
        var apiKey = null;

        this.setApiKey = function (apiKeyString) {
            apiKey = apiKeyString;
        };

        this.$get = [function () {
            return new ApiKey(apiKey);
        }];
    }])

    //what I added the provider 2ndt way
    //.provider("apiKey", providers)
    .config(configs)
    .run(runs);

    //what I added the provider 2ndt way
// function providers(){
//       var apiKey = null;
//
//       this.setApiKey = function (apiKeyString) {
//           apiKey = apiKeyString;
//       };
//
//       this.$get = [function () {
//           return new ApiKey(apiKey);
//       }];
// }


// what I added constructor function
function ApiKey(apiKey) {
    	this.apiKey = apiKey;
    }



function configs($httpProvider,apiKeyProvider) {
    var interceptor = function($location, $log, $q) {
        function error(response) {
            if (response.status === 401) {
                $log.error('You are unauthorised to access the requested resource (401)');
                  // to redirect to customized 401 page with $location
            } else if (response.status === 404) {
                $log.error('The requested resource could not be found (404)');
                  // to redirect to customized 401 page avec with $location
            } else if (response.status === 500) {
                $log.error('Internal server error (500)');
                  // to redirect to customized 401 page with $location
            }
            return $q.reject(response);
        }
        function success(response) {
            //Request completed successfully
            return response;
        }
        return function(promise) {
            return promise.then(success, error);
        }
    };

        $httpProvider.interceptors.push(interceptor);


        //  for more information look to this :
        //  http://websystique.com/spring-security/angularjs-basic-authentication-using-spring-security/
        //  http://www.webdeveasy.com/interceptors-in-angularjs-and-useful-examples/
      var Authorization =function() {
        return {
        // Send the Authorization header with each request
            'request': function(config) {
                config.headers = config.headers || {};
                var encodedString = btoa("bill:abc123");
                config.headers.Authorization = 'Basic '+encodedString;
               return config;
            }
        };
      };

      $httpProvider.interceptors.push(Authorization);



      // what I added : initialize th apiKey object
      apiKeyProvider.setApiKey("A1B2C3");

}

function runs($rootScope) {
    $rootScope.$on('$routeChangeStart', function() {
    });
    $rootScope.$on('$routeChangeSuccess', function() {
    });
}
