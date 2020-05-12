var gulp = require('gulp');
var serve = require('gulp-serve');



gulp.task('serve', serve('app'));
gulp.task('serve-build', serve(['app', 'build']));
gulp.task('serve-prod', serve({
  root: ['app', 'build'],
  port: 80,
  middleware: function (req, res) {
    // custom optional middleware
  }
}));



var submodule = require('gulp-symlink');

gulp.task('submodule', function () {
  return gulp.src('app/submodule/submodule.html')
    .pipe(submodule('app/submodule.html'))
});