//http://gulpjs.org/recipes/maintain-directory-structure-while-globbing.html

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var gutil = require("gulp-util");
var path = require("path");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var tslint = require("gulp-tslint");
var less = require("gulp-less");
var del = require('del');
var gnf = require('gulp-npm-files');

var scriptsPath = "app/**/*.ts";
var templatesPath = "app/**/*.html";
var lessPath = "app/**/*.less";
var destRootPath = "../WebApi/wwwroot";
var destAppPath = path.join(destRootPath, "app");

var _gulpsrc = gulp.src;
gulp.src = function () {
    return _gulpsrc.apply(gulp, arguments)
    .pipe(plumber({
        errorHandler: function () {    //https://github.com/gulpjs/gulp/issues/216 - there was additional logging here, which I removed
            this.emit('end');
        }
    }));
};

gulp.task('clean', function () {
    return del([
        destRootPath + "/"
    ], {force: true});
});

gulp.task("typescript", function () {
    var tsProject = ts.createProject("tsconfig.json", {
        declarationFiles: true,
        noResolve: true,
        isolatedModules: true
    });

    var tsResult =
            gulp.src(scriptsPath)
            .pipe(sourcemaps.init())
            .pipe(tsProject());

    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destAppPath));
});

gulp.task("tslint", function () {
    return gulp.src(scriptsPath)
        .pipe(tslint({
            formatter: "prose"
        }))
        .pipe(tslint.report({
            emitError: false
        }));
});

gulp.task("less", function () {
    return gulp.src(lessPath)
      .pipe(less())
      .pipe(gulp.dest(destAppPath));
});

gulp.task("templates", function () {
    return gulp.src(templatesPath)
        .pipe(gulp.dest(destAppPath));
});

gulp.task("static files", function () {
    return Promise.all([
        gulp.src("app/systemjs.config.js")
            .pipe(gulp.dest(destAppPath)),
        gulp.src("index.html")
            .pipe(gulp.dest(destRootPath))
        ]);
});

gulp.task("npm dependencies", function () {
    return gulp.src(gnf(), { base: '.' })    //"base" makes files maintain their relative paths  
        .pipe(gulp.dest(destRootPath));
});

gulp.task("rebuild", ['clean'], function () {
    gulp.start("static files");
    gulp.start("typescript");
    gulp.start("templates");
    gulp.start("less");
    gulp.start("npm dependencies");
});

gulp.task("watch", ['clean', 'rebuild'], function () {
    gulp.watch(scriptsPath, ["typescript", "tslint"]);
    gulp.watch(templatesPath, ["templates"]);
    gulp.watch(lessPath, ["less"]);
    gulp.watch("index.html", ["static files"]);
});

gulp.task("default", function () {
    // this task is called when you call gulp from command line
    gulp.start("static files");
    gulp.start("typescript");
    gulp.start("templates");
    gulp.start("less");
});