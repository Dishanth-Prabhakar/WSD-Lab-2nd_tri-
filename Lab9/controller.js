var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    $http.get("http://localhost:8000/data")
    .then(function(response) {
            $scope.jsondata = response.data;
            console.log($scope.jsondata)
        });
});