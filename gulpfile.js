const gulp         = require('gulp'),
      del          = require('del'),
      scss         = require('gulp-sass'),
      sourcemaps   = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer'),
      rollup       = require('rollup').rollup,
      terser       = require('rollup-plugin-terser').terser,
      notify       = require('gulp-notify'),
      browserSync  = require('browser-sync').create();

// Config
const config = require('./gulp-config.json');

// Clean
function clean() {
  return del(config.destination);
}

// Images
function imagesTask() {
  return gulp.src([
    `${config.source}/images/**/*`,
    `!${config.source}/images/.gitkeep`
  ], { base: config.source })
  .pipe(gulp.dest(config.destination));
}

// HTML
function htmlTask() {
  return gulp.src(`${config.source}/*.html`, { base: config.source })
  .pipe(gulp.dest(config.destination));
}

// SCSS
function scssBuildTask() {
  return gulp.src(`${config.source}/scss/**/*.scss`, { base: `${config.source}/scss` })
  .pipe(scss({ outputStyle: 'compressed' }))
  .on('error', notify.onError('SCSS compile error: <%= error.message %>'))
  .pipe(autoprefixer({ browsers: 'last 1 version, chrome > 70, not dead' }))
  .pipe(gulp.dest(config.destination));
}

function scssWatchTask() {
  return gulp.src(`${config.source}/scss/**/*.scss`, { base: `${config.source}/scss` })
  .pipe(sourcemaps.init())
  .pipe(scss()).on('error', notify.onError('SCSS compile error: <%= error.message %>'))
  .pipe(autoprefixer({ browsers: 'last 1 version, chrome > 70, not dead' }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.destination))
  .pipe(browserSync.stream());
}

// JS
function jsBuildTask() {
  return rollup({
    input: `${config.source}/js/index.js`,
    plugins: [ terser() ]
  })
  .then(bundle => {
    return bundle.write({
      file: `${config.destination}/${config.js.bundleName}`,
      format: 'iife'
    });
  });
}

function jsWatchTask() {
  return rollup({
    input: `${config.source}/js/index.js`
  })
  .then(bundle => {
    return bundle.write({
      file: `${config.destination}/${config.js.bundleName}`,
      format: 'iife',
      sourcemap: true
    });
  });
}

// Serve
function serve(done) {
  browserSync.init({
    server: {
      baseDir: config.destination
    },
    serveStatic: ['.', './dist'],
    serveStaticOptions: {
      extensions: ['html'] // pretty urls
    }
  });

  done();
}

// BrowserSync reload
function reloadTask(done) {
  browserSync.reload();

  done();
}

// Watch
function watchTask() {
  gulp.watch(`${config.source}/images/**/*`, gulp.series(imagesTask, reloadTask));
  gulp.watch(`${config.source}/*.html`, gulp.series(htmlTask, reloadTask));
  gulp.watch(`${config.source}/scss/**/*.scss`, scssWatchTask);
  gulp.watch(`${config.source}/js/**/*.js`, gulp.series(jsWatchTask, reloadTask));
}

// Default task
gulp.task('default', gulp.series(clean, gulp.parallel(htmlTask, scssWatchTask, imagesTask, jsWatchTask), gulp.parallel(serve, watchTask)));
gulp.task('build', gulp.series(clean, gulp.parallel(htmlTask, scssBuildTask, imagesTask, jsBuildTask)));
