(function() {
    
    // DIRECTIVES
    angular.module(angular_application_name).directive("weatherReport", function() {
        return {
            restrict: 'E', // Restrict to element only
            templateUrl: 'directives/weatherReport.html',
            replace: true, // Replace element with html form template
            scope: { // Isolating the scope
                weatherDay: "=",
                convertToStandard: "&",
                convertToDate: "&",
                dateFormat: "@"
            }
        };
    });
    
}());