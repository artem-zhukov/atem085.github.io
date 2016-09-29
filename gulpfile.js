var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var csscomb = require('gulp-csscomb');


gulp.task('default', ['watch']);

gulp.task('css', function () {
    return gulp.src('styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('styles'));
});

gulp.task( 'watch', function () {
    gulp.watch('styles/*.scss', [ 'css' ] );
});

//CODESTYLE
gulp.task('csscomb', function () {
    return gulp.src('styles/*.scss')
        .pipe(csscomb().on('error', handleError))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
    return this;
}