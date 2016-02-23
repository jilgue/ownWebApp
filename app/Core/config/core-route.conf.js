'use strict';

define(['require',
	'angular',
	'Core/core.mod.js',
	'Login/controllers/login-view.con',
       ],
       function(require, angular, ownApp, LoginViewController) {

	   return ownApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	       $urlRouterProvider.otherwise('/login');
	       //$locationProvider.html5Mode(true); //activate HTML5 Mode
	   });
       });
