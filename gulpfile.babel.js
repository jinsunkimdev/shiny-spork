"use strict";
import gulp from "gulp";
import del from "del";
var gsass = require("gulp-sass")(require("sass"));
import gimage from "gulp-image";

const routes = {
  html: {
    src: "src/*.html",
    dest: "build",
  },
  scss: {
    src: "src/scss/style.scss",
    dest: "build/css",
  },
};
//Build
export const buildHtml = () =>
  gulp.src(routes.html.src).pipe(gulp.dest(routes.html.dest));
export const buildSass = () =>
  gulp
    .src(routes.scss.src)
    .pipe(gsass().on("error", gsass.logError))
    .pipe(gulp.dest(routes.scss.dest));
//Cleaning Folder
export const clean = () => del(["build"]);
export const dev = gulp.series([clean, buildHtml, buildSass]);
