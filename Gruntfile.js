module.exports = function(grunt) {

    grunt.initConfig({
	uglify: {
	    target: {
		files: {
		    'app/js/ownwebapp.min.js': [//'bower_components/angular/angular.min.js',
						//'bower_components/angular-route/angular-route.min.js',
						//'bower_components/angular-resource/angular-resource.min.js',
						'bower_components/jquery/dist/jquery.min.js',
						'bower_components/bootstrap/dist/js/bootstrap.min.js',
					       ],
		    'app/js/require.js': ['bower_components/requirejs/require.js'],
		    'app/js/angular.js': ['bower_components/angular/angular.min.js'],
		    'app/js/angular-route.js': ['bower_components/angular-route/angular-route.min.js'],
		    'app/js/angular-resource.js': ['bower_components/angular-resource/angular-resource.min.js']
		}
	    }
	},
	cssmin: {
	    options: {
		shorthandCompacting: false,
		roundingPrecision: -1
	    },
	    target: {
		files: {
		    'app/css/ownwebapp.min.css': ['bower_components/bootstrap/dist/css/bootstrap.min.css',
						  'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
						  'app/css/main.css']
		}
	    }
	}
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('minify', function (target) {
        // Messages
        grunt.log.subhead("Minify css and js");
        grunt.task.run([
            'uglify',
            'cssmin'
	]);
    });

};
