(function() {

    // SERVICES
    angular.module(weatherApp).service('cityService', function() {

        this.city = 'New York, NY';
    });
    
    angular.module(weatherApp).service('weatherService', ['$resource', function($resource) {

        this.GetWeather = function(city, days) {
            
            // JSON_CALLBACK needed since call is going outside domain
            var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

            // Calling weather site and passing parameters
            return weatherAPI.get({ q: city, cnt: days });
        };

    }]);
    
    
}());