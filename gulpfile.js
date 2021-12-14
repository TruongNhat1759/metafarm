const fileinclude = require("gulp-file-include");
const markdown = require("markdown");
const gulp = require("gulp");

files = [
  "./src/index.html",
  "./src/login.html",
  "./src/buytoken.html",
];
gulp.task("compile", async function () {
  await gulp
    .src(files)
    .pipe(
      fileinclude({
        filters: {
          markdown: markdown.parse,
        },
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("default", gulp.series("compile"));
