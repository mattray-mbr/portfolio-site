//npm installed modules require
var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var sass = require('gulp-sass')
var minify = require('gulp-minify-css')

//gulp tasks
    gulp.task('styles', function() {
        gulp.src('./sass/**/*.scss')
            .pipe(concat('styles.scss'))
            .pipe(sass())
            .pipe(minify())
            .pipe(gulp.dest('./public/css/'));
    })

    gulp.task('default', function(){
        gulp.watch('./sass/**/*.scss', ['styles'])
    })