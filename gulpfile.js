'use strict';
/* jshint node:true */

var fs  = require('fs');
var gulp  = require('gulp');
var concat  = require('gulp-concat');
var replace  = require('gulp-replace');
var uglify  = require('gulp-uglify');

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

    var pkg = require('./package.json');
    var css = fs.readFileSync('./css/style.css', { encoding: 'UTF-8' });
    var cssString = css.replace(/\n/g, '').replace(/'/g, '\\\'').replace(/ +/g, ' ');

    return gulp.src(['./js/userscript-header.js', './js/main.js'])
        .pipe(concat('jvc-better-news.user.js'))
        // https://regex101.com/r/oF6zU7/3
        .pipe(replace(/^\s*\/\/\s+__BETTER_NEWS_INCLUDE__\s+(.+)$/gm, function (toReplace, filename) {
            var toIncludeJs = fs.readFileSync('./' + filename, { encoding: 'UTF-8' });
            return toIncludeJs;
        }))
        .pipe(replace('__BETTER_NEWS_VERSION__', pkg.version))
        .pipe(replace('__BETTER_NEWS_CSS__', cssString))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});
