var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('default', function () {
    //gulp.src('less/test/style.less')
            console.log("hapyoyo gulp first,you are beautiful! -- 20160701");
    gulp.src('a.scss')
        .pipe(sass())
        .pipe(gulp.dest("css"));

});