var gulp = require('gulp');
//Auto load all gulp plugins
var gulpLoadPlugins = require("gulp-load-plugins");
var plug = gulpLoadPlugins({
  rename: {
    'gulp-angular-templatecache': 'templateCache',
    'gulp-ng-annotate': 'ngAnnotate'
  }
});

var paths = {
  sass: ['./scss/**/*.scss'],
  templatecache: ['./www/templates/**/*.html'],
  minifyjs: ['./www/js/**/*.js'],
  buildPath: './www/dist'
};

//主任务
gulp.task('default', ['sass', 'templatecache', 'concat', 'images']);

//clean
gulp.task('clean', function() {
    return gulp.src([paths.buildPath], {read: false})
        .pipe(plug.clean({force: true}));
});

//js
gulp.task('minifyjs', function() {
  var opt = {newLine: ';'};

  return gulp.src('./www/js/**/*.js')
    .pipe(plug.ngAnnotate())
    .pipe(plug.ngmin({dynamic: false}))
    // .pipe(plug.stripDebug())
    .pipe(plug.uglify({outSourceMap: false}))
    .pipe(plug.concat('main.min.js', opt))
    .pipe(gulp.dest(paths.buildPath + '/js'))
});

//concat
gulp.task('concat',function(done){
    gulp.src('./www/js/**/*.js')
      .pipe(plug.concat('main.js'))
      .pipe(plug.ngAnnotate())
      .pipe(gulp.dest(paths.buildPath + '/js'))
      .on('end', done);
});

//sass
// gulp.task('sass', function(done) {
//   gulp.src('./scss/ionic.app.scss')
//   .pipe(plug.sourcemaps.init())
//     .pipe(plug.sass({
//       errLogToConsole: true
//     }))
//     .pipe(gulp.dest(paths.buildPath + '/css'))
//     .pipe(plug.minifyCss({
//       keepSpecialComments: 0
//     }))
//     .pipe(plug.rename({ extname: '.min.css' }))
//   .pipe(plug.sourcemaps.write('./maps'))
//     .pipe(gulp.dest(paths.buildPath + '/css'))
//     .on('end', done);
// });

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(plug.sourcemaps.init())
    .pipe(plug.sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(plug.minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(plug.rename({ extname: '.min.css' }))
  .pipe(plug.sourcemaps.write('./maps'))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

//html template
gulp.task('templatecache', function (done) {
    gulp.src('./www/templates/**/*.html')
        .pipe(plug.templateCache({
            standalone:true,
            module: 'starter.templates',
            base: function(file) {
              return 'templates/'+ file.relative;
        }}))
        .pipe(gulp.dest(paths.buildPath + '/js'))
        .on('end', done);
});

//Compress images
gulp.task('images', function () {
    return gulp.src('./www/img/**/*')
        .pipe(plug.cache(plug.imagemin({optimizationLevel: 3})))
        .pipe(gulp.dest(paths.buildPath + '/img'));
});

//watch the change
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.templatecache, ['templatecache']);
  gulp.watch(paths.minifyjs, ['concat']);
  // gulp.watch(paths.minifyjs, ['minifyjs']);
});

gulp.task('install', ['git-check'], function() {
  return plug.bower.commands.install()
    .on('log', function(data) {
      plug.gutil.log('bower', plug.gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + plug.gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', plug.gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + plug.gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});