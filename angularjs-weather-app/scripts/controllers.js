(function() {
    
    // CONTROLLERS
    angular.module(weatherApp).controller('homeController',['$scope','$location','cityService', function($scope,$location,cityService) {

        $scope.city = cityService.city;

        // Watching for variable changes in scope and updating service variable
        $scope.$watch('city', function() {
            cityService.city = $scope.city;
        });

        $scope.submit = function() {
            $location.path("/forecast");
        };
        
    }]);

    angular.module(weatherApp).controller('forecastController',['$scope','$routeParams','cityService','weatherService', function($scope,$routeParams,cityService,weatherService) {

        // Setting service in scope
        $scope.city = cityService.city;

        // Getting days from path param. Default 2
        $scope.days = $routeParams.days || '2';

        $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
        
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