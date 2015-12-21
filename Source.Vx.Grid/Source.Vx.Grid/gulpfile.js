var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    del = require('del'),
    html2js = require('gulp-html-js-template'),
    minify = require('gulp-minify');

gulp.task('styles', function () {
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
});

var errorHandler = function (error) {
    console.log(error);
    this.emit('end');
}

var resolveMinifiedPath = function (path) {
    var params = path.split("/");
    var file = params.splice(params.length - 1, 1)[0];
    var newPath = params.join("/") + "/";

    return {
        file: file,
        path: newPath
    };
}

// Minify JS Files
gulp.task('minify:js', function () {
    gulp.src('Resource/*.js')
    .pipe(minify())
    .pipe(gulp.dest('js'))
});

// Clean the concated js directory
gulp.task('clean:concat:js', function (done) {
    del('dist/min/js/vx.grid.all.min.js', done);
});

//Concat JS Files
gulp.task('concat:js', function () {
    return gulp.src('./js/*min.js')
    .pipe(concat('vx.grid.all.min.js'))
    .pipe(gulp.dest('./dist/min/js'));
});

//Concat JS Files
gulp.task('default:js',['clean:concat:js','minify:html:js','minify:js'], function () {
    return gulp.src('./js/*min.js')
    .pipe(concat('vx.grid.all.min.js'))
    .pipe(gulp.dest('./dist/min/js'));
});

// Clean the distributable html directory
gulp.task('minify:clean:html:js', function (done) {
    del('Resource/vx-grid-templates.js', done);
});

gulp.task('minify:html:js',['minify:clean:html:js'], function () {
    return gulp.src('Resource/vx-grid-templates.html')
	.pipe(html2js())
	.pipe(gulp.dest('Resource'));
});

//Watch task
gulp.task('default:css', function () {
    gulp.watch('scss/*.scss', ['minify:css']);
});

// Clean the distributable css directory
gulp.task('minify:clean:css', function (done) {
    del('css/', done);
});

// Compile out sass files and minify it
gulp.task('minify:css', ['minify:clean:css'], function () {

    var min = resolveMinifiedPath("./dist/min/css/vx-grid.min.css");
    return gulp.src('scss/*.scss')
        .pipe(plumber(errorHandler))
        .pipe(sass())
        .pipe(gulp.dest('css/'))
        .pipe(cssmin())
        .pipe(concat(min.file))
        .pipe(gulp.dest(min.path));
});