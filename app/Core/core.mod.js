'use strict';

define(['require',
	'module',
	'angular',
	'angular-route',
	'angular-resource',
	// Modules
	'Login/login.mod.js',
	'Forms/forms.mod.js',
       ],

       function (require, module, angular) {

	   var modules = ['ui.router', 'ngResource', 'Forms', 'Login'];

	   // Declare app level module which depends on filters, and services
	   var ownApp = angular.module('ownApp', modules);

	   return ownApp;
});
