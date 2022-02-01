
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');
const webpackConfigProd = require('./webpack.config.prod.js');

let cssFiles = [
		'./src/css/reset.css',
		'./src/css/bootstrap.css',
		'./src/css/animate.css',
		'./src/css/style.css',
		'./src/css/media.css'
];
let mapsSrc = [
	'./src/css/style.css.map',
	'./src/css/media.css.map'
];
function clear(){
	return del('./build/*');
}
function clearProd(){
	return del('./prodaction/*');
}

function styles() {
	return gulp.src(cssFiles)
				.pipe(sourcemaps.init())
				.pipe(concat('style.all.css'))
		        .pipe(autoprefixer({
		        	browsers: ['> 0.1%'],
		            cascade: false
		        }))
		        .pipe(cleanCSS({
		        	level: 2
		        }))
		        .pipe(sourcemaps.write())
				.pipe(gulp.dest('./build/css'))
				.pipe(browserSync.stream());
};
function stylesProd() {
	return gulp.src(cssFiles)
				.pipe(concat('style.all.css'))
		        .pipe(autoprefixer({
		        	browsers: ['> 0.1%'],
		            cascade: false
		        }))
		        .pipe(cleanCSS({
		        	level: 2
		        }))
		        .pipe(sourcemaps.write())
				.pipe(gulp.dest('./prodaction/css'))
				.pipe(browserSync.stream());
};
function cssFromScss() {
	return gulp.src('./src/css/scss/*.css')
				.pipe(gulp.dest('./build/css'))
				.pipe(browserSync.stream());
};

function cssFromScssProd() {
	return gulp.src('./src/css/scss/*.css')
				.pipe(gulp.dest('./prodaction/css'))
				.pipe(browserSync.stream());
};
function maps() {
	return gulp.src(mapsSrc)
				.pipe(gulp.dest('./build/css'))
				.pipe(browserSync.stream());
};
function img() {
	return gulp.src('./src/img/**/*')
				.pipe(gulp.dest('./build/img'))
				.pipe(browserSync.stream());
};
function imgProd() {
	return gulp.src('./src/img/**/*')
				.pipe(gulp.dest('./prodaction/img'))
				.pipe(browserSync.stream());
};
function html() {
	return gulp.src('src/*.html')
				.pipe(gulp.dest('./build'))
				.pipe(browserSync.stream());
};
function htmlProd() {
	return gulp.src('src/*.html')
				.pipe(gulp.dest('./prodaction'))
				.pipe(browserSync.stream());
};
function fonts() {
	return gulp.src('src/fonts/*')
				.pipe(gulp.dest('./build/fonts'))
				.pipe(browserSync.stream());
};
function fontsProd() {
	return gulp.src('src/fonts/*')
				.pipe(gulp.dest('./prodaction/fonts'))
				.pipe(browserSync.stream());
};
function jsAll(){
	return gulp.src('./src/js/**/*.js')
			.pipe(browserSync.stream());
};
function script() {
	return gulp.src('./src/js/script.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
}
function scriptProd() {
	return gulp.src('./src/js/script.js')
		.pipe(webpack(webpackConfigProd))
		.pipe(gulp.dest('./prodaction/js'))
		.pipe(browserSync.stream());
}
function watch(){
	gulp.watch('./src/css/**/*.css', styles),
	gulp.watch('./src/css/scss/*.css', cssFromScss),
	gulp.watch('./src/*.html', html),
	gulp.watch('./src/js/*.js', jsAll),
	gulp.watch('src/img/**/*')
	browserSync.init({
        server: {
            baseDir: "./build",
			serveStaticOptions: {
                extensions: ["html"]
            }
        },
		port: 4000,
		notify: true
    });
}

let build = gulp.series(clear,
	gulp.parallel(styles, img, html, jsAll, cssFromScss, maps, fonts));

gulp.task('build', build);
gulp.task('prod', gulp.series(clearProd,
	gulp.parallel(stylesProd, cssFromScssProd, imgProd, htmlProd), scriptProd));
gulp.task('watch', gulp.series(build,
	gulp.parallel(script, watch)));