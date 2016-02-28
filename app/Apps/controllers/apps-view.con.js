'use strict';

define(['angular',
	'Apps/apps.mod.js',
	'Core/resources/core-rest.res.js',
       ],
       function(angular, AppsMod, ownREST) {

	   var controller = function ($scope, ownREST) {
	   };
	   return AppsMod.controller('AppsViewController', controller);
       });
