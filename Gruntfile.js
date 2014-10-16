var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      tox_webfont: {
        files: {
          'fonts/tox-webfont.min.css': ['fonts/*.css']
        }
      }
    },

    copy: {
      main: {
        files: [
          { expand: true, cwd: 'fonts/', src: ['*.css'], dest: 'css/', filter: 'isFile' },
          { expand: true, cwd: 'fonts/', src: ['tox-webfont.html'], dest: 'demo/', filter: 'isFile' }
        ]
      }
    },

    _clean: {
      after_copy: ['fonts/*.css', 'fonts/*.html'],
      build: ['css/', 'demo/', 'fonts/']
    },

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

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-webfont');

  grunt.renameTask('clean', '_clean');

  grunt.registerTask('default', ['webfont', 'cssmin', 'copy:main', '_clean:after_copy']);
  grunt.registerTask('clean', ['_clean:build']);
};
