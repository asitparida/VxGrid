var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    del = require('del'),
    html2js = require('gulp-html-js-template'),
    minify = require('gulp-minify'),
    header = require('gulp-header');
    //plato = require('plato');

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

// Clean the distributable html directory
gulp.task('minify:clean:html:js', function () {
    return del('Resource/vx-grid-templates.js');
});

gulp.task('minify:html:js', ['minify:clean:html:js'], function () {
    return gulp.src('Resource/vx-grid-templates.html')
	.pipe(html2js())
	.pipe(gulp.dest('Resource'));
});

// Minify JS Files
gulp.task('minify:js', ['minify:html:js'], function () {
    return gulp.src('Resource/*.js')
    .pipe(minify())
    .pipe(gulp.dest('js'))
});

// Clean the concated js directory
gulp.task('clean:concat:js', function () {
    return del('dist/min/js/vx.grid.min.js');
});

//Concat JS Files
gulp.task('concat:bundle:js', ['clean:concat:js', 'minify:js'], function () {
    return gulp.src([
        './js/angular-scroll-min.js',
        './js/angular-vs-repeat-min.js',
        './js/vx-grid.jsoneditor.directive-min.js',
        './js/vx-grid-min.js',
        './js/vx-grid-templates-min.js',
    ])
    .pipe(concat('vx.grid.bundle.min.js'))
    .pipe(gulp.dest('./dist/min/js'));
});

gulp.task('concat:js', ['clean:concat:js', 'minify:js'], function () {
    return gulp.src([
        './js/vx-grid.jsoneditor.directive-min.js',
        './js/vx-grid-min.js',
        './js/vx-grid-templates-min.js',
    ])
    .pipe(concat('vx.grid.min.js'))
    .pipe(gulp.dest('./dist/min/js'));
});


////Plato Tasks
//gulp.task('plato:js', function () {
//    try {
//        return plato.inspect(['Resource/vx-grid.js', 'Resource/vx-grid.jsoneditor.directive.js'],
//            'plato-reports/',
//            {}, function (report) {
//                /* analyse report */
//            });
//    } catch (e) {
//        console.log(e);
//    }
//});

//Watch JS task
gulp.task('default:vxgrid:js', function () {
    gulp.watch(['Resource/vx-grid.js', 'Resource/vx-grid-templates.html', 'Resource/vx-grid.jsoneditor.directive.js'], ['concat:js', 'concat:bundle:js']);
});

// Clean the distributable css directory
gulp.task('minify:clean:css', function () {
    return del('css/');
});

// Compile out sass files and minify it
gulp.task('minify:css', ['minify:clean:css'], function () {
    var min = resolveMinifiedPath("./dist/min/css/vx.grid.min.css");
    return gulp.src('scss/*.scss')
        .pipe(plumber(errorHandler))
        .pipe(sass())
        .pipe(gulp.dest('css/'))
        .pipe(cssmin())
        .pipe(concat(min.file))
        .pipe(gulp.dest(min.path));
});

//Watch CSS task
gulp.task('default:vxgrid:css', function () {
    gulp.watch('scss/*.scss', ['minify:css']);
});

var banner = ['/**',
  ' * <%= pkg.name %>',
  ' * @version v<%= pkg.version %>',
  ' * @license <%= pkg.license %>',
  ' * @git <%= pkg.git %>',
  ' */',
  ''].join('\n');


var pkg = {
    name: 'VX-GRID',
    version: '1.4.7',
    license: 'MIT',
    git: 'https://github.com/asitparida/vxgrid'
}

//Watch CSS task
gulp.task('default:vxgrid:dist-prod', function () {
    return gulp.src(['dist/min/js/vx.grid.bundle.min.js', 'dist/min/js/vx.grid.min.js', 'dist/min/css/vx.grid.min.css'])
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('../../dist'));
});