const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// it helps our scss file get linked to 
// the css file
function buildStyles() {
    // return src('shinobi/**/*.scss') // the double asterick signifies the sub-folders in the shinobi folder
    return src('sass/**/*.scss') // the double asterick signifies the sub-folders in the sass folder and also we want to start watching the sass folder instead of the shinobi
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('css'))
};

//  watches our scss file so changes made
//  can be automatically added to our css file
function watchTask() {
    // watch(['shinobi/**/*.scss'], buildStyles) this watches the shinobi folder
    watch(['sass/**/*.scss', '*.html'], buildStyles) //we want to start watching the sass folder and html file instead of the shinobi 
};

exports.default = series(buildStyles, watchTask);


