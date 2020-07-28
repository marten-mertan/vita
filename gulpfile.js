var { watch, src, dest, parallel, series } = require('gulp');
var browserSync = require('browser-sync');
var del = require('del');
var twig = require('gulp-twig');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var babel = require('gulp-babel');
var webpack = require('webpack-stream');

// Девсервер
function devServer(cb) {
  var params = {
    watch: true,
    reloadDebounce: 150,
    notify: false,
    server: { baseDir: 'docs' },
  };

  browserSync.create().init(params);
  cb();
}

// Сборка
function buildPages() {
    return src(['src/pages/*.twig', 'src/pages/*.html'])
      .pipe(twig())
      .pipe(dest('docs/'));
  }

function buildStyles() {
    return src(['src/styles/**/*.scss', 'src/styles/**/*.css'])
      .pipe(sassGlob())
      .pipe(sass())
      .pipe(postcss([
        autoprefixer()
      ]))
      .pipe(dest('docs/styles/'));
}

function buildVendorScripts() {
  return src('src/scripts/vendor/**/*.js')
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(dest('docs/scripts/vendor/'));
}

function buildScripts() {
  return src('src/scripts/index.js')
  .pipe(webpack({
    output:       {filename: 'bundle.js'},
    optimization: {minimize: false}
  }))
  .pipe(dest('docs/scripts/'));
}

function copyOldStyles() {
  return src('src/styles_old/**/*.*')
    .pipe(dest('docs/styles_old/'));
}

function copyOldScripts() {
  return src('src/scripts_old/**/*.js')
    .pipe(dest('docs/scripts_old/'));
}

function copyBitrix() {
  return src('src/bitrix/**/*.*')
    .pipe(dest('docs/bitrix/'));
}

function copyAPI() {
  return src('src/scripts/api.js')
    .pipe(dest('docs/scripts/'));
}

function buildAssets(cb) {
    // Уберём пока картинки из общего потока
    src(['src/assets/**/*.*', '!src/assets/img/**/*.*'])
      .pipe(dest('docs/'));
  
    src('src/assets/img/**/*.*')
      .pipe(imagemin())
      .pipe(dest('docs/assets/img'));
  
    // Раньше функция что-то возвращала, теперь добавляем вместо этого искусственый колбэк
    // Это нужно, чтобы Галп понимал, когда функция отработала и мог запустить следующие задачи
    cb();
  }

// Отслеживание
function watchFiles() {
    watch(['src/pages/*.twig', 'src/pages/*.html', 'src/components/**/*.twig'], buildPages);
    watch(['src/styles/*.css','src/styles/*.scss', 'src/components/**/*.scss'], buildStyles);
    watch('src/scripts/**/*.js', buildScripts);
    watch('src/assets/**/*.*', buildAssets);

  }

// Очистка билда
function clearBuild() {
    return del('docs/');
  }

exports.default =
  series(
    clearBuild,
    parallel(
      devServer,
      series(
        parallel(buildPages, buildStyles, buildScripts, buildVendorScripts, copyOldStyles, copyOldScripts, copyBitrix, copyAPI, buildAssets),
        watchFiles
      )
    )
  );