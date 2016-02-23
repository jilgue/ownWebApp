'use strict';

define(['angular',
	'Login/login.mod.js',
	'Core/resources/core-rest.res.js',
	'Forms/directives/form.dir.js',
	'Login/controllers/login.con.js',
       ],
       function(angular, LoginMod, ownREST) {

	   var controller = function ($scope, $http, ownREST) {

	       ownREST.get({mode: 'apiconf', class: 'user', func: 'stLogin.json'}, function(response) {
		   $scope.model = response.config;
	       });

	   };
	   return LoginMod.controller('LoginViewController', controller);
	   //return function() {angular.module('Login').controller('LoginViewController', controller);};
       });
