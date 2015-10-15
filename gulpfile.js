var gulp   = require('gulp'),
    config = {
        paths: {
            dest: 'build',
            html: 'src/index.html',
            scripts: {
                main: './src/scripts/main.js',
                watch: ['src/scripts/*', 'src/scripts/**/*']
            }
        }
    },
    browserSync = require('browser-sync').create();

gulp.task('scripts:compile', function() {
    var browserify = require('browserify'),
        source     = require('vinyl-source-stream'),
        babelify   = require('babelify'),
        b;

    b = browserify(config.paths.scripts.main, {
        debug: true,
        transform: [babelify],
        detectGlobals: false
    });

    return b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(config.paths.dest + '/scripts'))
        .pipe(browserSync.stream());
});

gulp.task('html:copy', function() {
    return gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dest));
});


gulp.task('default', ['html:copy', 'scripts:compile']);

gulp.task('watch', ['default'], function() {
    gulp.watch(config.paths.html, ['html:copy']);
    gulp.watch(config.paths.scripts.watch, ['scripts:compile']);
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: config.paths.dest,
            index: 'index.html'
        },
        ui: false,
        port: 8080,
        logLevel: 'info';
        logPrefix: 'BrowserSync',
        open: false,
        notify: false,
        reloadDelay: 200

    });
    gulp.watch(config.paths.html, ['html:copy']).on('change', browserSync.reload)
    gulp.watch(config.paths.scripts.watch, ['scripts:compile']);
});
