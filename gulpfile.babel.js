"use strict";
import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
const sass = require("gulp-sass")(require("sass"));
import csso from "gulp-csso";
import gbro from "gulp-bro";
import imagemin from "gulp-image";
import babelify from "babelify";
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
    src: "src/js/main.js",
    dest: "build/js/",
    watch: "src/js/**/*.js",
  },
  img: {
    src: "src/img/*",
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

const buildGbro = () => {
  return gulp
    .src(routes.js.src)
    .pipe(
      gbro({
        transform: [
          babelify.configure({ presets: ["@babel/preset-env"] }),
          ["uglifyify", { global: true }],
        ],
      })
    )
    .pipe(gulp.dest(routes.js.dest));
};

const buildImg = () => {
  gulp.src(routes.img.src).pipe(imagemin()).pipe(gulp.dest("routes.img.dest"));
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
  gulp.watch(routes.img.src, buildImg);
  gulp.watch(routes.js.watch, buildGbro);
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
  buildGbro,
  buildImg,
  buildReset,
  liveServer,
]);
export const clean = () => del(["build"]);
