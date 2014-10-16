var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'submodules/Tox-UI/**/*.svg',
        dest: 'fonts',
        options: {
          font: 'tox-webfont',
          hashes: false,
          rename: function(name){
            return path.basename(name).replace(/_/g, '-');
          },
          templateOptions: {
            baseClass: 'tox-font',
            classPrefix: 'tox-font-',
            mixinPrefix: 'tox_font_'
          },
          types: ['eot','woff','ttf','svg']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);
};
