'use strict';

define(['require',
	'module',
	'angular',
	'angular-route',
	'angular-resource',
	// Modules
	'Login/login.mod.js',
	'Forms/forms.mod.js',
	// Route
	'js/route.js',
       ],

       function (require, module, angular) {

	   var modules = ['ngRoute', 'ngResource', 'Forms', 'Login'];

	   // Declare app level module which depends on filters, and services
	   var ownApp = angular.module('ownApp', modules);

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

	   return ownApp;
});
