import gulp from "gulp";
import babel from "gulp-babel";
import ghtml from "gulp-html";

gulp
  .task("default", () =>
    //for babel
    gulp.src("src/app.js").pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
  )
  .pipe(gulp.dest("build/"));

const html = () => {
  return gulp.src("src/index.html").pipe(ghtml()).pipe(gulp.dest("build/"));
};
