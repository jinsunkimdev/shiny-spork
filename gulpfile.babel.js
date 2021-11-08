"use strict";
import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
const sass = require("gulp-sass")(require("sass"));
import csso from "gulp-csso";
import del from "del";
import webserver from "gulp-webserver";

//build path
const routes = {
  html: {
    src: "src/index.html",
    dest: "dist",
    watch: "src/index.html",
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
const buildIndex = () => {
  return gulp
    .src(routes.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(routes.html.dest));
};

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
  gulp.watch(routes.html.watch, buildIndex);
};

const webServer = () =>
  gulp.src("dist").pipe(
    webserver({
      livereload: true,
      open: true,
    })
  );
//gulp series
const liveServer = gulp.series([webServer, watch]);
export const dev = gulp.series([
  buildIndex,
  buildStyle,
  buildReset,
  liveServer,
]);
export const clean = () => del(["dist"]);
