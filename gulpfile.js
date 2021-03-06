var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], function() {
  //
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init({
        proxy: "http://localhost:3000",
        files: ["./public"],
        port: 3000,
        browser: "default"
    });
});

gulp.task('nodemon', function (cb) {

	var started = false;

	return nodemon({
		script: 'server.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true;
		}
	});
});