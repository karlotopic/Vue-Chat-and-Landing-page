var gulp=require("gulp"),
    babelify=require('babelify'),
    vueify=require("vueify"),
    browserify = require("browserify"),
    css=require('browserify-css')
gulp.task("build",function(){
    return browserify({
        entries:["src/main.js"]
    })
    .transform(babelify.configure({
        presets: ["es2015"]
    }))
    .transform(css, { global: true })
    .transform(vueify)
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./"))
    ;
})