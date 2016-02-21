'use strict';

define(['angular',
	'Login/login.mod.js',
       ],
       function(angular, LoginMod) {

	   return LoginMod.controller('LoginController', ['$scope', '$http', '$timeout', 'ownREST', function ($scope, $http, $timeout, ownREST) {

	       // Necesario para los formularios, ya que el model nos llega de forma asincrona
	       $scope.$watch("model", function(newValue, oldValue, scope) {
		   if (newValue){
		       $scope.model = JSON.parse(newValue);
		   }
	       });

	       $scope.stSubmit = function() {

		   var post = new ownREST();
		   angular.extend(post, ngGetFormModelParams($scope.form, $scope.model));
		   console.log(post);
		   post.$save({mode: 'apirest', class: 'user', func: 'login.json'}).then(
		       function(result) {
			   console.log(result);
		       });
	       };
	   }]);

       });

