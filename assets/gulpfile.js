
'use strict';

var gulp = require('gulp');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var shell = require('gulp-shell');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var styledown = require('gulp-styledown');
var uglify = require('gulp-uglify');


gulp.task('compressCss', function () {
  return gulp.src('sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(minifyCSS())
    .pipe(autoprefixer())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(''))
});

gulp.task('compileCss', function () {
  return gulp.src('sass/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer())
    .pipe(rename('style.css'))
    .pipe(gulp.dest(''))
});

gulp.task('styledown', function () {
  return gulp.src(['sass/**/*.scss', '!sass/framework/**/*.scss'])
    .pipe(styledown({
      config: 'config.md',
      filename: 'styleguide.html'
    }))
    .pipe(gulp.dest('../'));
});

gulp.task('minifyJs', function (cb) {
  return gulp.src(['js/*.js', '!js/*.min.js'])
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(''))
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['minifyJs']);
  gulp.watch('sass/**/*.scss', ['compressCss']);
  gulp.watch('sass/**/*.scss', ['compileCss']);
  gulp.watch('sass/**/*.scss', ['styledown']);
});
