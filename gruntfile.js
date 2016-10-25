/**
 * Created by Anu on 10/24/2016.
 */
module.exports = function(grunt){
    grunt.initConfig({});
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default',['watch']);
}