"use strict";
import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
const sass = require("gulp-sass")(require("sass"));
import csso from "gulp-csso";
import concat from "gulp-concat";
import image from "gulp-image";
import del from "del";
import webserver from "gulp-webserver";

//build path
const routes = {
  html: {
    src: "src/index.html",
    dest: "build",
    watch: "src/index.html",
  },
  sass: {
    src: "src/scss/style.scss",
    dest: "build/css/",
    watch: "src/scss/**.scss",
  },
  js: {
    src: "src/js/*.js",
    dest: "build/js/",
    watch: "src/js/**.js",
  },
  img: {
    src: "src/img/**",
    dest: "build/img/",
  },
  reset: {
    src: "src/scss/reset.scss",
    dest: "build/css/",
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

const buildConcat = () => {
  return gulp
    .src(routes.js.src)
    .pipe(concat("main.js"))
    .pipe(gulp.dest(routes.js.dest));
};

const buildImg = () => {
  return gulp.src(routes.img.src).pipe(image()).pipe(routes.img.dest);
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
  gulp.watch(routes.js.watch, buildJs);
};

const webServer = () =>
  gulp.src("build").pipe(
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
  buildConcat,
  buildImg,
  buildReset,
  liveServer,
]);
export const clean = () => del(["build"]);
