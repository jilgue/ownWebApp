'use strict';

define(['angular',
	'Login/login.mod.js',
	'Forms/directives/own-form.js',
	'Login/controllers/login.con.js',
       ],
       function(angular, LoginMod) {

	   var controller = ['$scope', '$http', 'ownREST', function ($scope, $http, ownREST) {

	       ownREST.get({mode: 'apiconf', class: 'user', func: 'stLogin.json'}, function(response) {
		   $scope.model = response.config;
	       });

	   }];
	   return LoginMod.controller('LoginViewController', controller);
	   //return function() {angular.module('Login').controller('LoginViewController', controller);};
       });
