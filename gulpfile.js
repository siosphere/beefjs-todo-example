var gulp = require('gulp');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');

var files = [
    './src/*.ts',
    './src/**/*.ts',
    './src/*.tsx',
    './src/**/*.tsx',
];

gulp.task('compile', function() {
    var tsResult = gulp.src(files)
    .pipe(ts({
        sortOutput: true,
        declarationFiles: false,
        experimentalDecorators: true,
        target: 'ES5',
        jsx: 'react'
    }))

    return tsResult.js.pipe(gulp.dest('./app/'))
})

gulp.task('default', ['compile'], function(){
    return true
});
