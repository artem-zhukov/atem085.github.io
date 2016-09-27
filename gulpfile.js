var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


gulp.task('default', ['watch']);

gulp.task('css', function () {
    return gulp.src('styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('styles'));
});

gulp.task( 'watch', function () {
    gulp.watch('styles/*.scss', [ 'css' ] );
});