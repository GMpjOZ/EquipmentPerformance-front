var gulp = require('gulp');


var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var uglify  = require('gulp-uglify');
var rename = require('gulp-rename');
var concat  = require('gulp-concat');
var clean = require('gulp-clean');
var tinylr = require('tiny-lr');
var server = tinylr();
var browserSync = require('browser-sync');
var port = 35729;
var livereload = require('gulp-livereload');



gulp.task('css', function () {
  	gulp.src('./src/scss/*.scss')
    	.pipe(sass.sync().on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleancss())
        .pipe(livereload(server))
        .pipe(gulp.dest('./src/css'))
});


gulp.task('js', function () {
    gulp.src('./src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(livereload(server))
        .pipe(gulp.dest('./src/js'));
});


gulp.task('default', function(){
    gulp.start('css','js');
});

gulp.task('watch',function(){
	livereload.listen()
	gulp.watch('./src/scss/*/*.scss',['css']);
	gulp.watch('./src/js/*.js',['js']);
});
