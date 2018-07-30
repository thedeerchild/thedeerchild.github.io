var gulp         = require('gulp');
var gutil        = require('gulp-util');
var imagemin     = require('gulp-imagemin');
var sass         = require('gulp-ruby-sass');
var uglify       = require('gulp-uglify');
var watch        = require('gulp-watch');
var concat       = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

var SCSS_DIR   = 'source/stylesheets/';
var JS_DIR     = 'source/javascripts/';
var IMAGES_DIR = 'source/images/';
var OUTPUT_DIR = '.tmp/';

gulp.task('jpgs', function() {
    return gulp.src(IMAGES_DIR + '**/*.jpg')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest(IMAGES_DIR));
});

gulp.task('sass', function () {
    return sass(SCSS_DIR + '**/*.scss', { 
      noCache: true,
      style: "compressed"
    })
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(OUTPUT_DIR + 'stylesheets/'));
});

gulp.task('js', function() {
  gulp.src(JS_DIR + '**/*.js')
  .pipe(uglify())
  .pipe(concat("app.min.js"))
  .pipe(gulp.dest(OUTPUT_DIR +' js/'));
});

gulp.task('watch', function() {
  gulp.watch(SCSS_DIR + '**/*.scss', function() {
    gulp.run('sass');
  });
 
  gulp.watch(JS_DIR + '**/*.js', function() {
    gulp.run('js');
  });
});


gulp.task('build', ['sass', 'js']);
gulp.task('default', ['build', 'watch']);
