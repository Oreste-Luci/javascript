(function() {
    // CONTROLLERS
    angular.module(angular_application_name).controller('homeController',['$scope','cityService', function($scope,cityService) {

        $scope.city = cityService.city;

        // Watching for variable changes in scope and updating service variable
        $scope.$watch('city', function() {
            cityService.city = $scope.city;
        });

    }]);

    angular.module(angular_application_name).controller('forecastController',['$scope','$resource','$routeParams','cityService', function($scope,$resource,$routeParams,cityService) {

        // Setting service in scope
        $scope.city = cityService.city;

        // Getting days from path param. Default 2
        $scope.days = $routeParams.days || '2';

        // JSON_CALLBACK needed since call is going outside domain
        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

        // Calling weather site and passing parameters
        $scope.weatherResut = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

        // Function for converting Kelving to Celsius
        $scope.convertToCelsius = function(degK) {
            return Math.round(degK - 273.15);        
        };

        // Function for converting timestamp in milliseconds to date
        $scope.convertToDate = function(dt) {
            return new Date(dt * 1000);
        };

    }]);
    
}());