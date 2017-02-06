'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config ($routeProvider) {
    $routeProvider.
    when('/home', {
            templateUrl: 'home/home.tpl.html',
            controller: 'HomeController as home'
        }).
		when('/contact', {
            templateUrl: 'contact/contact.tpl.html',
            controller: 'ContactController as contact'
        }).
		when('/signup', {
            templateUrl: 'signup/signup.tpl.html',
            controller: 'SignupController as signup'
        }).
		when('/projects/project_1', {
            templateUrl: 'projects/project_1.tpl.html',
            controller: 'Project1Controller as project_1'
        }).
    when('/projects/project_2', {
            templateUrl: 'projects/project_2.tpl.html',
            controller: 'Project2Controller as project_2'
            })

            // .when('/premieres', {
            // templateUrl: 'sections/premieres/premieres.tpl.html',
            // controller: 'PremieresController as premieres',
            // resolve: {
                // shows: function(ShowService) {
                    // return ShowService.getPremieres();
                // }
            // }
        // })
        // .when('/search', {
            // templateUrl: 'sections/search/search.tpl.html',
            // controller: 'SearchController as search'
        // })
        // .when('/search/:query', {
            // templateUrl: 'sections/search/search.tpl.html',
            // controller: 'SearchController as search'
        // })
        // .when('/popular', {
            // templateUrl: 'sections/popular/popular.tpl.html',
            // controller: 'PopularController as popular',
            // resolve: {
                // shows: function(ShowService) {
                    // return ShowService.getPopular();
                // }
            // }
        // })
        // .when('/view/:id', {
            // templateUrl: 'sections/view/view.tpl.html',
            // controller: 'ViewController as view',
            // resolve: {
                // show: function(ShowService, $route) {
                    // return ShowService.get($route.current.params.id);
                // }
            // }
        // })
        .otherwise({
            redirectTo: '/'
        });
}
