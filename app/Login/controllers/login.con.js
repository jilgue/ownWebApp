'use strict';

define(['angular',
	'Login/login.mod.js',
	'Core/resources/core-rest.res.js',
       ],
       function(angular, LoginMod) {

	   function stSetCookie(token) {

	       console.log(token);
	   }

	   return LoginMod.controller('LoginController', function ($scope, $timeout, ownREST) {

	       // Necesario para los formularios, ya que el model nos llega de forma asincrona
	       $scope.$watch("model", function(newValue, oldValue, scope) {
		   if (newValue){
		       $scope.model = JSON.parse(newValue);
		   }
	       });

	       $scope.stSubmit = function() {

		   var post = new ownREST();
		   angular.extend(post, ngGetFormModelParams($scope.form, $scope.model));
		   post.$post({mode: 'apirest', class: 'user', func: 'login.json'}).then(
		       function(result) {
			   if (result.response.token != undefined) {
			       if(stSetCookie(result.response.token)) {
			       }
			   }
		       });
	       };
	   });

       });

