'use strict';

define(['require',
	'angular',
	'angular-route',
       ],
       function(require, angular) {

	   var modules = ['ui.router'];

	   var AppsMod = angular.module('Apps', modules);

	   return AppsMod;
       });
