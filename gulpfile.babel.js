"use strict";

const gulp = require("gulp");
const del = require("del");
const runSequence = require("run-sequence");
const isparta = require("isparta");
const mocha = require("gulp-mocha");
const istanbul = require("gulp-istanbul");

gulp.task("clean", function () {
    return del(["./coverage"]);
});

gulp.task("coverage", function () {
    return  gulp.src(["./client/**/*.js"])
    .pipe(istanbul({
        instrumenter: isparta.Instrumenter,
        includeUntested: true
    }))
    .pipe(istanbul.hookRequire(null, null, {
        verbose: true
    }));
});

gulp.task("test", function () {
    return gulp.src("test/**/*.js", { read: false })
    .pipe(mocha());
});

gulp.task("report", function () {
    gulp.src(["./client/**/*.js"], { read: false })
    .pipe(istanbul.writeReports());
});

gulp.task("default", function (done) {
    runSequence("clean", "coverage", "test", "report", done);
});

