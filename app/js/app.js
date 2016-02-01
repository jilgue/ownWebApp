'use strict';

// Declare app level module which depends on filters, and services
var ownApp = angular.module('ownApp', ['ngRoute', 'Forms']);

ownApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
	.when('/login', {
	    templateUrl: 'views/login.html'
	});
    $routeProvider.otherwise({ redirectTo: '/login' });
    //$locationProvider.html5Mode(true); //activate HTML5 Mode
});

var FormMod = angular.module('Forms', []);

var LoginController = FormMod.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

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

var ownForm = FormMod.directive('ownForm', function() {
    return {
	templateUrl: '../Forms/directives/tpls/own-form.html'
    };
});
