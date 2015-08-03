var myApp = angular.module("myApp",[]);

myApp.controller('parent1Controller', ['$scope',function($scope){

    $scope.parent1vm = {};
    $scope.parent1vm.message = "Parent 1 Message";

}]);

myApp.controller('child1Controller', ['$scope',function($scope){

    $scope.child1vm = {};
    $scope.child1vm.message = "Child 1 Message";

}]);

myApp.controller('parent2Controller', [function(){

    this.message = "Parent 2 Message";

}]);

myApp.controller('child2Controller', [function(){

    this.message = "Child 2 Message";

}]);