'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
};

exports.buildStyles = buildStyles;
exports.default = buildStyles;

exports.watch = function () {
  gulp.watch('./src/sass/**/*.scss', buildStyles);
};