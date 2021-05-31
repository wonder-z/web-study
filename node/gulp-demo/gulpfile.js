const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const jsmin = require('gulp-babel')
//参数为： 任务名称和任务的回调函数
gulp.task('first', async()=>{
    console.log('glup program');
    gulp.src('./src/1.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('htmlmin',async()=>{
    gulp.src('./src/*.html')
        .pipe(fileinclude())
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('dist'));
})

HTMLOutputElement.task('jsmin',async() =>{
    gulp.src('')
})

gulp.task('default',['htmlmin','cssmin', 'jsmin', 'copy']);

//gulp default 或 gulp