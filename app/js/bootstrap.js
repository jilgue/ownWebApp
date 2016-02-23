// Configuration Options
require.config({
    baseUrl: '/',
    // shim: makes external libraries reachable
    paths: {
	'angular': 'js/angular',
	'angular-route': 'js/angular-route',
	'angular-resource': 'js/angular-resource'
    },
    shim: {
	angular: {
	    exports : 'angular'
	},
	'angular-route': ['angular'],
	'angular-resource': ['angular']
    }
});

'use strict';

define(['require',
	'module',
	'angular',
	'Core/config/core.conf.js',
       ],

       function (require, module, angular) {

	   var app = {};

	   app.init = function () {
	       angular.bootstrap(document, ['ownApp']);
	   };

	   return app.init();
});

var ngGetFormModelParams = function (form, model) {

    var params = model.objectFieldSearch("field");

    var ret = new Object();
    params.forEach(function(param) {

	ret[param] = form[param];
    });

    return ret;
};

Array.prototype.objectFieldSearch = function (field) {

    var ret = new Array();
    this.forEach(function(object) {

	if (object[field] !== undefined) {
	    ret.push(object[field]);
	}
    });
    return ret;
};

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
