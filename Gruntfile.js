/* globals module */
module.exports = function (grunt) {
    /**
     * Automatically load all Grunttasks, which follow the pattern `grunt-*`
     */
    require('load-grunt-tasks')(grunt);

    /**
     * Allow description and definition of avaialable tasks
     */
    grunt.config("availabletasks.tasks.options", {
        /* No special config yet */
    });
    grunt.registerTask("tasks", ["availabletasks"]);


    /**
     * Basic configuration for all watch tasks
     */
    grunt.config("watch", {
        options: {
            atBegin: true
        }
    });

    /**
     * Basic configuration for all symlink tasks
     */
    grunt.config("symlink", {
        options: {
            overwrite: true
        }
    });

    /**
     * Jshint configuration for linting the project files
     */
    grunt.config("jshint", {
        options: {
            jshintrc: "jshint.json"
        },
        all: [
            "src/**/*.js"
        ]
    });

    grunt.config("watch.lint", {
        files: grunt.config.get("jshint.all"),
        tasks: ["lint"]
    });

    grunt.registerTask("lint", ["jshint"]);

    grunt.config("watch.build", {
        files: [
            "src/**/*.js"
        ],
        tasks: ["build"]
    });

    grunt.registerTask("build", ["lint"]);


     /**
     * Karma-Runner execution configuration to execute Unit-Tests from
     * within Grunt
     */
    grunt.config("karma", {
        "all": {
            configFile: 'karma.conf.js',
            autoWatch: true
        },
        "all-single": {
            configFile: 'karma.conf.js',
            autoWatch: false
        },
        "dev":{
            configFile: 'karma.conf.js',
            browsers: ['PhantomJS'],
            autoWatch: true
        },
        "dev-single": {
            configFile: 'karma.conf.js',
            browsers: ['PhantomJS'],
            singleRun: true
        }
    });

    // Execute single test run with PhantomJS
    grunt.registerTask("test", ["karma:dev-single"]);

    // Watch changes and run tests on Phantom automatically
    grunt.registerTask("watch:test", ["karma:dev"]);

    /**
     * Symlink files to www directory
     */
    grunt.config("symlink.www", {
        /*
         * Mostly use dynamic file lists in order to automatically skip those,
         * which may not exist like vendor or node_modules or bower_components
         */
        files: [
            {
                expand: true,
                cwd: ".",
                src: ["bower_components"],
                dest: "www/"
            },
            {
                expand: true,
                cwd: ".",
                src: ["node_modules"],
                dest: "www/"
            },
            {
                expand: true,
                cwd: ".",
                src: ["vendor"],
                dest: "www/"
            },
            {
                src: "src",
                dest: "www/js"
            },
            {
                expand: true,
                cwd: "assets",
                src: ["*"],
                dest: "www/"
            }
        ]
    });

    /**
     * Clean all the build and temporary directories
     */
    grunt.config("clean", {
        "build": ["build/**/*"]
    });

    /**
     * Default grunt task ;)
     */
    grunt.registerTask("default", ["build"]);
};
