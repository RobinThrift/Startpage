
var gulp   = require('gulp'),
    config = {
        paths: {
            dest: 'build',
            html: 'src/index.html',
            styles: {
                main: 'src/styles/main.scss',
                watch: ['src/styles/*', 'src/styles/**/*']
            },
            scripts: {
                main: './src/scripts/main.js',
                watch: ['src/scripts/*', 'src/scripts/**/*']
            }
        }
    };

gulp.task('scss:compile', function() {
    var scss = require('gulp-sass'),
        neat = require('node-neat').includePaths;

    return gulp.src(config.paths.styles.main)
        .pipe(scss({
            includePaths: neat,
            errLogToConsole: true,
            sourceMapEmbed: true,
            sourceMap: true,
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(config.paths.dest + '/styles'));
});

gulp.task('scripts:compile', function() {
    var browserify = require('browserify'),
        source     = require('vinyl-source-stream'),
        babelify   = require('babelify'),
        b;

    b = browserify({
        entries: config.paths.scripts.main,
        debug: true,
        transform: [babelify]
    });

    return b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(config.paths.dest + '/scripts'));
});

gulp.task('html:copy', function() {
    return gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dest));
});





gulp.task('colours:get', function(done) {
    var xtos = require('xresources-to-scss');

    xtos.fileToFile('./.Xresources', './src/styles/colours.scss', function(err) {
        done(err);
    });
});


gulp.task('default', ['html:copy', 'scss:compile', 'scripts:compile']);

gulp.task('watch', ['default'], function() {
    gulp.watch(config.paths.html, ['html:copy']);
    gulp.watch(config.paths.scripts.watch, ['js:compile']);
    gulp.watch(config.paths.styles.watch, ['scss:compile']);
});
