"use strict";
import gulp from "gulp";
const sass = require("gulp-sass")(require("sass"));
import csso from "gulp-csso";
import del from "del";
//build path
const routes = {
  html: {
    src: "index.html",
    watch: "index.html",
  },
  sass: {
    src: "src/scss/style.scss",
    dest: "dist/css",
    watch: "src/scss/**.scss",
  },
  reset: {
    src: "src/scss/reset.scss",
    dest: "dist/css",
  },
};
//gulp tasks
const buildStyle = () => {
  return gulp
    .src(routes.sass.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(csso())
    .pipe(gulp.dest(routes.sass.dest));
};

const buildReset = () => {
  return gulp
    .src(routes.reset.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(csso())
    .pipe(gulp.dest(routes.sass.dest));
};

const watch = () => {
  gulp.watch(routes.sass.watch, buildStyle);
  gulp.watch(routes.html.watch);
};
//gulp series
export const dev = gulp.series([buildStyle, buildReset, watch]);
export const clean = () => del(["dist"]);
