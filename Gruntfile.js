module.exports = function(grunt) {
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'submodules/Tox-UI/**/*.svg',
        dest: 'fonts',
        options: {
          font: 'toxui',
          templateOptions: {
            baseClass: 'tox-font',
            classPrefix: 'tox-font-',
            mixinPrefix: 'tox_font_'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);
};
