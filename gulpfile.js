// const gulpCssmin = require('gulp-cssmin');

const gulp=require('gulp');
const cssmin=require('gulp-cssmin');
const autoprefixer=require('gulp-autoprefixer');

/* 压缩css，先读文件，加前缀(在package.json中添加浏览器列表 "browserslist": [
    "last 2 versions",
    "iOS>7",
    "Firefox < 20",
    "last 2 Explorer versions"
  ]) ，接着压缩，接着放入dist*/
const css =()=>{
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())//要加浏览器列表
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}

module.exports.css=css;

//移动图片
const imgs=()=>{
    return gulp.src('./src/imgs/**')
    .pipe(gulp.dest('./dist/imgs'))
}
module.exports.imgs=imgs;
//移动libs
const libs=()=>{
    return gulp.src('./src/libs/**')
    .pipe(gulp.dest('./dist/libs'))
}
module.exports.libs=libs;

//压缩js
//引入
//下载babel/@babel/core  @babel/preset-env
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
//转es5语法
const js=()=>{
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets:['@babel/env']//转换语法
    }))
    .pipe(uglify())//压缩
    .pipe(gulp.dest('./dist/js'))
}

module.exports.js=js;

//html
const htmlmin = require('gulp-htmlmin');

const html =()=>{
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        minifyCSS:true,//去掉css的空格
        minifyJS:true,//去掉js的空格
        removeComments:true,//去掉注释
        removeAttributeQuotes:true,//去掉属性的引号
        collapseBooleanAttributes:true,//去掉重复的：eg：checked='checked ==>checked
        collapseWhitespace:true//去掉html的空白符
    }))
    .pipe(gulp.dest('./dist/pages'))
}
module.exports.html=html;

//删除文件目录;
const del = require('del');
const delDir=()=>{
    return del(['./dist'])
}
module.exports.del=delDir;
//监测目录是否改动;
const watchDir=()=>{
    gulp.watch('./src/css/**',css);
    gulp.watch('./src/imgs/**',imgs);
    gulp.watch('./src/js/**',js);
    gulp.watch('./src/libs/**',libs);
    gulp.watch('./src/pages/**',html);
    gulp.watch('./src/sass/**',sassHandler)
}
//开启服务器
const webserver = require('gulp-webserver');

const server=()=>{
    return gulp.src('./dist')//读取服务器的根目录
    .pipe(webserver({//服务器的一些设置live
        port:8080,//端口号
        open:'/pages/aaaa.html',//首页
        livereload:true,//热更新,页面动态更新
        proxies:[
            {
                source:'/weather',
                target:'https://way.jd.com/jisuapi/weather'
            }
        ]
    }))
    
}
const sass=require('gulp-sass');
const sassHandler=()=>{
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
module.exports.default=gulp.series(
    delDir,
    gulp.parallel(css,html,js,imgs,libs,sassHandler),
    server,
    watchDir
)