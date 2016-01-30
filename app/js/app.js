'use strict';

// Declare app level module which depends on filters, and services
angular.module('ownApp', ['ngRoute', 'loginModule']);

angular.module('ownApp').config(function ($routeProvider, $locationProvider) {
    $routeProvider
	.when('/login', {
	    templateUrl: 'views/login.html',
	    controller: 'LoginController',
	    controllerAs: 'login'
	});
    $routeProvider.otherwise({ redirectTo: '/login' });
    //$locationProvider.html5Mode(true); //activate HTML5 Mode
});

var loginModule = angular.module('loginModule', []);

loginModule.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

    $scope.stLogin = function() {

	$http.post('http://192.168.56.110/apirest/user/login.json',
		   $.param({
		       userName: $scope.login.userName,
		       password: $scope.login.password
		   }),{
		       headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
		  ).
	    success(function(data, status, headers, config) {
		console.log("bien", data, status, headers, config);
	    }).
	    error(function(data, status, headers, config) {
		console.log("mal", data, status, headers, config);
	    });
    };
}]);
