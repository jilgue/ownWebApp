'use strict';

define(['angular',
	'Forms/forms.mod.js',
       ],
       function(angular, FormsMod) {

	   return FormsMod.directive('ownForm', function() {
	       return {
		   restrict: 'E',
		   templateUrl: 'Forms/directives/tpls/own-form.html',
		   name: 'ctrl',
		   controller: '@',
		   controllerAs: 'form',
		   scope: {model: '@'}
	       };
	   });
       });
