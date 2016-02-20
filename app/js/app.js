'use strict';

// Declare app level module which depends on filters, and services
var ownApp = angular.module('ownApp', ['ngRoute', 'ngResource', 'Forms', 'Login']);

ownApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
	.when('/login', {
	    templateUrl: 'views/login.html',
	    controller: 'LoginViewController'
	});
    $routeProvider.otherwise({ redirectTo: '/login' });
    //$locationProvider.html5Mode(true); //activate HTML5 Mode
});

var ownREST = ownApp.factory('ownREST', function($resource){

    return $resource('http://192.168.56.110/:mode/:class/:func', {},
		     {'get': {method: 'GET',
			      isArray: false
			     },
		      'save': {method: 'POST',
			       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			       transformRequest: function (data) {
				   return $.param(data);
			       }
			      }
		     });
});

var LoginMod = angular.module('Login', []);

var LoginViewController = LoginMod.controller('LoginViewController', ['$scope', '$http', 'ownREST', function ($scope, $http, ownREST) {

    ownREST.get({mode: 'apiconf', class: 'user', func: 'stLogin.json'}, function(response) {
	$scope.model = response.config;
    });

}]);

var LoginController = LoginMod.controller('LoginController', ['$scope', '$http', '$timeout', 'ownREST', function ($scope, $http, $timeout, ownREST) {

    // Necesario para los formularios, ya que el model nos llega de forma asincrona
    $scope.$watch("model", function(newValue, oldValue, scope) {
	if (newValue){
	    $scope.model = JSON.parse(newValue);
	}
    });

    $scope.stSubmit = function() {

	var post = new ownREST();
	angular.extend(post, ngGetFormModelParams($scope.form, $scope.model));
	console.log(post);
	post.$save({mode: 'apirest', class: 'user', func: 'login.json'}).then(
	    function(result) {
		console.log(result);
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
