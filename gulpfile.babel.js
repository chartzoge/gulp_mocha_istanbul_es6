"use strict";

const gulp = require("gulp");
const del = require("del");
const runSequence = require("run-sequence");
const isparta = require("isparta");
const mocha = require("gulp-mocha");
const istanbul = require("gulp-istanbul");

const SOURCE_CODE_PATH = "./server/**/*.js";

gulp.task("clean", function () {
    return del(["./coverage"]);
});

gulp.task("coverage", function () {
    return  gulp.src([SOURCE_CODE_PATH])
    .pipe(istanbul({
        instrumenter: isparta.Instrumenter,
        includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task("test", function () {
    return gulp.src("test/**/*.js", { read: false })
    .pipe(mocha());
});

gulp.task("report", function () {
    gulp.src([SOURCE_CODE_PATH], { read: false })
    .pipe(istanbul.writeReports());
});

gulp.task("default", function (done) {
    runSequence("clean", "coverage", "test", "report", done);
});

