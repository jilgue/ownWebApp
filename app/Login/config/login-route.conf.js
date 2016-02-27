'use strict';

define(['require',
	'angular',
	'Login/login.mod.js',
	'Login/controllers/login-view.con',
       ],
       function(require, angular, LoginMod, LoginViewController) {

	   return LoginMod.config(function ($stateProvider, $urlRouterProvider) {

	       $stateProvider.state('login', {
		   url: '/login',
		   views: {"main": {templateUrl: 'Login/controllers/tpls/login-view.con.tpl.html',
				    controller: 'LoginViewController'
				   }
			  }
	       });
	   });
       });
