(function() {
    
    // ROUTES
    angular.module(angular_application_name).config(['$routeProvider', function($routeProvider) {

        $routeProvider

        .when("/", {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        }) 

        .when("/forecast", {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        }) 

            .when("/forecast/:days", {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        }) 

    }]);
    
}());