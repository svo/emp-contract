var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('test', shell.task([
  'npm test'
]));

gulp.task('build', shell.task([
  'raml2html api.raml > api.html'
]));

gulp.task('watch', function() {
  gulp.watch(['api.raml', 'traits/*.raml', 'example/*', 'schema/*'], ['test', 'build']);
});

gulp.task('default', ['watch']);
