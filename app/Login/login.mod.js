'use strict';

define(['require',
	'angular',
	'angular-route',
       ],
       function(require, angular) {

	   var modules = ['ui.router'];

	   var LoginMod = angular.module('Login', modules);

	   return LoginMod;
       });
