// include gulp

var gulp = require('gulp');

// Include plugins

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');


// concatenate files

gulp.task('scripts', function () {
    return gulp.src('app/src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('sass',function () {
    return sass('app/src/scss/style.sass', {style:'compressed'})
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('build/css'));
});

gulp.task('watch',function () {
    gulp.watch('app/src/js/*.js',['scripts']);

    gulp.watch('app/src/scss/*.scss',['sass']);
})

// default task

gulp.task('default',['scripts','sass', 'watch']);