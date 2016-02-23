'use strict';

define(['angular',
	'Login/login.mod.js',
	'Core/resources/core-rest.res.js',
       ],
       function(angular, LoginMod, ownREST) {

	   function stSetCookie(token) {

	       console.log(token);
	   }

	   return LoginMod.controller('LoginController', function ($scope, $http, $timeout, ownREST) {

	       // Necesario para los formularios, ya que el model nos llega de forma asincrona
	       $scope.$watch("model", function(newValue, oldValue, scope) {
		   if (newValue){
		       $scope.model = JSON.parse(newValue);
		   }
	       });

	       $scope.stSubmit = function() {

		   var post = new ownREST();
		   angular.extend(post, ngGetFormModelParams($scope.form, $scope.model));
		   console.log("paso pro aqui");
		   post.$save({mode: 'apirest', class: 'user', func: 'login.json'}).then(
		       function(result) {
			   if (result.response.token != undefined) {
			       if(stSetCookie(result.response.token)) {
			       }
			   }
		       });
	       };
	   });

       });

