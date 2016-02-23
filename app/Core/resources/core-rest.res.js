'use strict';

define(['require',
	'angular',
	'Core/core.mod.js',
       ],
       function(require, angular, ownApp) {

	   return ownApp.factory('ownREST', function($resource){

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
       });
