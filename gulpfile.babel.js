"use strict";

const gulp = require("gulp");
const babel = require("gulp-babel");
const del = require("del");
const runSequence = require("run-sequence");
const isparta = require("isparta");
const mocha = require("gulp-mocha");
const injectModules = require("gulp-inject-modules");
const istanbul = require("gulp-istanbul");

const debug = require("gulp-debug");

const SOURCE_CODE_PATH = "./server/**/*.js";

gulp.task("clean", function () {
    return del(["./coverage"]);
});

gulp.task("coverage", function () {
    return  gulp.src([SOURCE_CODE_PATH])
    .pipe(debug({ title: "debug" }))
    .pipe(istanbul({
        instrumenter: isparta.Instrumenter,
        includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task("test", function () {
    return gulp.src("test/**/*.js", { read: false })
    .pipe(mocha())
    .pipe(istanbul.writeReports());
});

gulp.task("report", function () {
    gulp.src([SOURCE_CODE_PATH], { read: false })
    .pipe(debug({ title: "debug" }))
    .pipe(istanbul.writeReports());
});

gulp.task("default", function (done) {
    runSequence("clean", "coverage", "test", done);
});

