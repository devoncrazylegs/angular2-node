var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    //useref = require('gulp-useref'),
    tsProject = ts.createProject("tsconfig.json");

var assetsURL = "app/assets/";

gulp.task('build-jquery', function() {
    gutil.log('build jQuery');
    gulp.src([
        'node_modules/jquery/dist/jquery.min.js'
    ])
        .pipe(gulp.dest(assetsURL + '/js'));
});

gulp.task('build-ng2-toastr', function() {
    gutil.log('build toastr js');
    gulp.src([
        'node_modules/ng2-toastr/bundles/ng2-toastr.min.js'
    ])
        .pipe(gulp.dest(assetsURL + '/js'));

    gutil.log('build toastr CSS');
    gulp.src([
        'node_modules/ng2-toastr/bundles/ng2-toastr.min.css'
    ])
        .pipe(gulp.dest(assetsURL + '/css'));
});

gulp.task('build-bootstrap', function() {
    gutil.log('build Bootstrap CSS');
    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
        .pipe(gulp.dest(assetsURL + '/css'));

    gutil.log('build Bootstrap JS');
    gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ])
        .pipe(gulp.dest(assetsURL + '/js'));
});

gulp.task('build-SCSS', function() {

    gutil.log('build scss...');
    gulp.src([
        'src/css/**/*.scss'
    ])
        .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
        .pipe(gulp.dest(assetsURL + '/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/css/**/*.scss', ['build-SCSS']);
});

gulp.task('build', [
    'build-jquery',
    'build-bootstrap',
    'build-SCSS',
    'build-ng2-toastr'
]);

