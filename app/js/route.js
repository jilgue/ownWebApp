'use strict';

define(['require',
	'angular',
	'js/app',
	'Login/controllers/login-view.con',
       ],
       function(require, angular, ownApp, LoginViewController) {

	   return ownApp.config(function ($routeProvider, $locationProvider) {
	       $routeProvider
		   .when('/login', {
		       templateUrl: 'Login/views/login.html',
		       controller: 'LoginViewController'
		   });
	       $routeProvider.otherwise({ redirectTo: '/login' });
	       //$locationProvider.html5Mode(true); //activate HTML5 Mode
	   });
       });
