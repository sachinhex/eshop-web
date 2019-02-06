var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src('assets/scss/styles.scss')
                .pipe(sass())
                .pipe(gulp.dest('assets/css'));
})

gulp.task('watch',function(){
    gulp.watch('assets/scss/*.scss',gulp.series('sass'));
});

// gulp.task('default',['sass','watch']);
gulp.task('default', gulp.parallel('watch','sass', function() { 
}));