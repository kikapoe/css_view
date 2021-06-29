var gulp = require('gulp');
sass = require("gulp-sass"),
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');



/*******************  LTR   ******************/


//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('Adminor/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
                .pipe(sass())
                .pipe(beautify.css({ indent_size: 4 }))
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('Adminor/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______task for style-dark
gulp.task('dark', function(){
   return gulp.src('Adminor/assets/css/style-dark.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Adminor/assets/css'));
		
})

//_______task for sidemenu
gulp.task('sidemenu', function(){
   return gulp.src('Adminor/assets/css/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Adminor/assets/css'));
		
})

//_______task for darksidemenu
gulp.task('darksidemenu', function(){
   return gulp.src('Adminor/assets/css/dark-sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Adminor/assets/css'));
		
})


//_______task for closedsidemenu
gulp.task('closed', function(){
   return gulp.src('Adminor/assets/css/closed-sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Adminor/assets/css'));
		
})


//_______task for closed darksidemenu
gulp.task('darkclosed', function(){
        return gulp.src('Adminor/assets/css/dark-closed-sidemenu.scss')
             .pipe(sourcemaps.init())
             .pipe(sass())
             .pipe(beautify.css({ indent_size: 4 }))
             .pipe(sourcemaps.write('.'))
             .pipe(gulp.dest('Adminor/assets/css'));
                     
     })

//_______task for boxed
gulp.task('boxed', function(){
   return gulp.src('Adminor/assets/css/boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Adminor/assets/css'));
		
})

//_______task for dark-boxed
gulp.task('darkboxed', function(){
   return gulp.src('Adminor/assets/css/dark-boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Adminor/assets/css'));
		
})





/*******************  RTL   ******************/


//_______ task for scss folder to css main style 
gulp.task('watchrtl', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('Adminor/assets/scss-rtl/**/*.scss') 
		.pipe(sourcemaps.init())                       
                .pipe(sass())
                .pipe(beautify.css({ indent_size: 4 }))
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('Adminor/assets/css-rtl'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______task for style-dark
gulp.task('darkrtl', function(){
   return gulp.src('Adminor/assets/css-rtl/style-dark.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Adminor/assets/css-rtl'));
		
})

//_______task for sidemenu
gulp.task('sidemenurtl', function(){
   return gulp.src('Adminor/assets/css-rtl/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Adminor/assets/css-rtl'));
		
})

//_______task for darksidemenu
gulp.task('darksidemenurtl', function(){
   return gulp.src('Adminor/assets/css-rtl/dark-sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Adminor/assets/css-rtl'));
		
})


//_______task for closedsidemenu
gulp.task('closedrtl', function(){
   return gulp.src('Adminor/assets/css-rtl/closed-sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Adminor/assets/css-rtl'));
		
})


//_______task for closed darksidemenu
gulp.task('darkclosedrtl', function(){
        return gulp.src('Adminor/assets/css-rtl/dark-closed-sidemenu.scss')
             .pipe(sourcemaps.init())
             .pipe(sass())
             .pipe(beautify.css({ indent_size: 4 }))
             .pipe(sourcemaps.write('.'))
             .pipe(gulp.dest('Adminor/assets/css-rtl'));
                     
     })

//_______task for boxed
gulp.task('boxedrtl', function(){
   return gulp.src('Adminor/assets/css-rtl/boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Adminor/assets/css-rtl'));
		
})

//_______task for dark-boxed
gulp.task('darkboxedrtl', function(){
   return gulp.src('Adminor/assets/css-rtl/dark-boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Adminor/assets/css-rtl'));
		
})
