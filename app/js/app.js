'use strict';

// Declare app level module which depends on filters, and services
var ownApp = angular.module('ownApp', ['ngRoute', 'Forms', 'Login']);

ownApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
	.when('/login', {
	    templateUrl: 'views/login.html',
	    controller: 'LoginViewController'
	});
    $routeProvider.otherwise({ redirectTo: '/login' });
    //$locationProvider.html5Mode(true); //activate HTML5 Mode
});

var LoginMod = angular.module('Login', []);

var LoginViewController = LoginMod.controller('LoginViewController', ['$scope', '$http', function ($scope, $http) {

    $http.get('http://192.168.56.110/apiconf/user/stLogin.json').
	success(function(data, status, headers, config) {
	    $scope.model = data.config;
	}).
	error(function(data, status, headers, config) {
	    console.log("mal", data, status, headers, config);
	});
}]);

var LoginController = LoginMod.controller('LoginController', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {

    // Necesario para los formularios, ya que el model nos llega de forma asincrona
    $scope.$watch("model",function(newValue,OldValue,scope){
	if (newValue){
	    $scope.model = JSON.parse(newValue);
	}
    });

    $scope.stSubmit = function() {

	$http.post('http://192.168.56.110/apirest/user/login.json', $.param(ngGetFormModelParams($scope.form, $scope.model)),
		   {
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

var FormMod = angular.module('Forms', []);

var ownForm = FormMod.directive('ownForm', function() {
    return {
	restrict: 'E',
	templateUrl: '/Forms/directives/tpls/own-form.html',
	name: 'ctrl',
	controller: '@',
	controllerAs: 'form',
	scope: {model: '@'}
    };
});

var ngGetFormModelParams = function (form, model) {

    var params = model.objectFieldSearch("field");

    var ret = new Object();
    params.forEach(function(param) {

	ret[param] = form[param];
    });

    return ret;
};

Array.prototype.objectFieldSearch = function (field) {

    var ret = new Array();
    this.forEach(function(object) {

	if (object[field] !== undefined) {
	    ret.push(object[field]);
	}
    });
    return ret;
};

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
