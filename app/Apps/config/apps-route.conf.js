'use strict';

define(['require',
	'angular',
	'Apps/apps.mod.js',
	'Apps/controllers/apps-view.con.js',
       ],
       function(require, angular, AppsMod) {

	   return AppsMod.config(function ($stateProvider, $urlRouterProvider) {

	       $stateProvider.state('apps', {
		   url: '/apps',
		   views: {"main": {templateUrl: 'Apps/controllers/tpls/apps-view.con.tpl.html',
				    controller: 'AppsViewController'
				   }
			  }
	       });
	   });
       });
