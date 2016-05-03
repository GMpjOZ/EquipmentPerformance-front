var gulp = require('gulp');

var imagemin = require('gulp-imagemin');
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
var jslint = require('gulp-jslint');


gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(livereload(server))
});

gulp.task('css', function () {
  	gulp.src('./src/scss/*.scss')
    	.pipe(sass.sync().on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleancss())
        .pipe(livereload(server))
        .pipe(gulp.dest('./css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('images', function(){
    gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(livereload(server))
        .pipe(gulp.dest('./dist/images'));
})

gulp.task('fonts', function () {
	gulp.src('./src/fonts/*')
		.pipe(gulp.dest('./dist/fonts'))
});

gulp.task('js', function () {
    gulp.src('./src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(livereload(server))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('serve', function() {
    browserSync({
        files: "**",
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/*.html',['html']);
    gulp.watch('./src/scss/*/*.scss',['css']);
    gulp.watch('./src/images/**/*',['images']);
    gulp.watch('./src/js/*.js',['js']);
    browserSync.reload();
});

gulp.task('clean', function() {
    gulp.src(['./dist/css', './dist/js', './dist/images', '.dist/fonts'], {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean'], function(){
    gulp.start('html','css','images','js', 'fonts');
});

gulp.task('watch',function(){
	livereload.listen()
	gulp.watch('./src/*.html',['html']);
	gulp.watch('./src/scss/*/*.scss',['css']);
	gulp.watch('./src/images/**/*',['images']);
	gulp.watch('./src/js/*.js',['js']);
});


gulp.task('jslint', function () {
    return gulp.src([
        './src./js/*.js'
    ]).pipe(jslint({
        node: true,
        nomen: true,
        sloppy: true,
        plusplus: true,
        unparam: true,
        stupid: true
    }));
});
gulp.task('default', ['jslint']);
