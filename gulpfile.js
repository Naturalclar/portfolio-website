const gulp = require('gulp');
const watch = require('gulp-watch');
const clean = require('gulp-rimraf');
const webpack = require('webpack');
const browserSync = require('browser-sync').create();

gulp.task('scripts', (callback) => {
  webpack(require('./webpack.config.js'), (err, stats) => {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task('build', (callback) => {

  gulp.src('public/*.js').pipe(clean());
  webpack(require('./webpack.config.prod.js'), (err, stats) => {
    if (err){
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });

  watch('./client', () => {
    gulp.start('autoRefresh');
  });
});

gulp.task('autoRefresh', ['scripts'], () => {
  browserSync.reload();
});