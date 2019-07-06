const gulp         = require('gulp'),
      del          = require('del'),
      scss         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      concat       = require('gulp-concat'),
      uglify       = require('gulp-uglify'),
      pipeline     = require('readable-stream').pipeline,
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
function scssTask() {
  return gulp.src(`${config.source}/scss/**/*.scss`, { base: `${config.source}/scss` })
  .pipe(scss())
  .on('error', notify.onError('SCSS compile error: <%= error.message %>'))
  .pipe(autoprefixer({ browsers: 'last 2 versions' }))
  .pipe(gulp.dest(config.destination))
  .pipe(browserSync.stream());
}

// JS
function jsTask() {
  return gulp.src([
      `${config.source}/js/**/*.js`,
    ], { base: config.source })
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.destination)
  );
}

// Serve
function serve(done) {
  browserSync.init({
    server: {
      baseDir: config.destination
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
  gulp.watch(`${config.source}/scss/**/*.scss`, scssTask);
  gulp.watch(`${config.source}/js/**/*.js`, jsTask);
}

// Default task
gulp.task('default', gulp.series(clean, gulp.parallel(htmlTask, scssTask, imagesTask, jsTask), gulp.parallel(serve, watchTask)));
gulp.task('build', gulp.series(clean, gulp.parallel(htmlTask, scssTask, imagesTask, jsTask)));
