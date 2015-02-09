module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowerInstall: {

            target: {

                // Point to the files that should be updated when 
                // you run `grunt bower-install` 
                src: [
      'app/views/**/*.html', // .html support... 
      'app/views/**/*.jade', // .jade support... 
      'app/styles/main.scss', // .scss & .sass support... 
      'app/config.yml' // and .yml & .yaml support out of the box! 
    ],

                // Optional: 
                // --------- 
                cwd: '',
                dependencies: true,
                devDependencies: false,
                exclude: [],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        }
    });
    grunt.loadNpmTasks('grunt-bower-install');

    
    grunt.registerTask('default', ['bowerInstall']);
}