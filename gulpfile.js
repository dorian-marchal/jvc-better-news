'use strict';
/* jshint node:true */

var gulp  = require('gulp');
var concat  = require('gulp-concat');
var replace  = require('gulp-replace');

var tinylr;
var lrPort = 35729;

function notifyLiveReload(event) {
    var fileName = require('path').relative(__dirname, event.path);

    tinylr.changed({
        body: {
          files: [ fileName ]
        }
    });
}

gulp.task('default', ['live']);

gulp.task('live', ['livebuild', 'livereload']);

gulp.task('livereload', function () {
    tinylr = require('tiny-lr')();
    tinylr.listen(lrPort);

    // On reload quand le fichier final change
    gulp.watch('dist/*', notifyLiveReload);
});

gulp.task('livebuild', function () {
    // Quand une source change, on build
    gulp.watch('css/*', ['build']);
    gulp.watch('js/*', ['build']);
});

gulp.task('build', function () {

    // Part du js/main.js
    // Concatener les scripts (Depuis les includes) et supprimer les includes
    // Importer le CSS (pas de point d'ancrage, en dur))
    // Gérer le numéro de version depuis package.json (<version>)

    var pkg = require('./package.json')

    return gulp.src(['./js/userscript-header.js', './js/main.js'])
        .pipe(concat('jvc-better-news.user.js'))
        .pipe(replace('<better-news-version>', pkg.version))
        .pipe(gulp.dest('./dist'));
});
