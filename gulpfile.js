var gulp = require('gulp');

var sass = require('gulp-sass');
var minifycss = require('gulp-clean-css');
var uglify  = require('gulp-uglify');
var rename = require('gulp-rename');
var concat  = require('gulp-concat');
var clean = require('gulp-clean');

gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
})

gulp.task('css', function () {
  	gulp.src('./src/scss/*.scss')
    	.pipe(sass())
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css'));
});


gulp.task('js', function () {
    gulp.src('./src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('img', function() {
    gulp.src('./src/img/*.*')
        .pipe(gulp.dest('./dist/img'));
})

gulp.task('clean', function() {
    return gulp.src(['./dist/css','./dist/js','dist/*.html','./dist/img'],{read: false})
               .pipe(clean())
});

gulp.task('default', ['clean'], function(){
    gulp.start('css','js','html','img');
});

gulp.task('watch',function(){
    gulp.watch('./src/*.html',['html']);
	gulp.watch('./src/scss/*/*.scss',['css']);
	gulp.watch('./src/js/*.js',['js']);
    gulp.watch('./src/img/*.*',['img']);
});
