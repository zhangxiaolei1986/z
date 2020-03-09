const {
    src,
    dest,
    series,
    parallel
} = require('gulp');
const watch = require('gulp-watch');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();

function server() {
    browserSync.init({
        server: './'
    });
};
function css() {
    return src([
        'less/common.less',
        'less/index.less',
        'less/admin.less',
    ])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('css/'));
};
function del() {
    return src('css/*.css').pipe(clean());
};
function monitor() {
    watch('html/*.html',browserSync.reload);
    watch('less/*.less',css);
    watch('css/*.css',browserSync.reload);
    watch("js/*.js",browserSync.reload);
};
exports.dev = parallel(server,monitor);
exports.pub = series(del,css);
