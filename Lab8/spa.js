var app = angular.module("myMod",['ngRoute']);


app.config(["$routeProvider",function($routeProvider){
	
	$routeProvider.
    when("/home",{
		templateUrl:'home.html',
		controller:''
	}).
	when("/admin",{
		templateUrl:'admin.html',
		controller:'empController'
	}).
	when("/user",{
		templateUrl:'user.html',
		controller:'usercontroller'
	}).
	when("/signin",{
		templateUrl:'signin.html',
		controller:''
	}).
	otherwise({
		redirectTo:'index.html'
	});
	
}]);

app.controller("empController",function($scope,$http)
{
    $http.get('info.json')
    .success(function(response)
    {
        $scope.empes=response.records;
    });
})

app.controller("usercontroller",function($scope,$http)
{
    $http.get('uinfo.json')
    .success(function(response)
    {
        $scope.users=response.records;
    });
});
