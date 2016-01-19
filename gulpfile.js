var gulp = require('gulp'); 

var jasmine = require('gulp-jasmine'); 

var ts = require('gulp-typescript');
//var tsProject = ts.createProject('tsconfig.json');
var tsSettings = { module: "commonjs" };

gulp.task('compile' , function() {
	var tsResult =  gulp.src( "src/**/*.ts" )
		.pipe( ts( tsSettings ) )
		.pipe(gulp.dest('built') );
});


gulp.task("watch-all", function () {
    var watcher = gulp.watch('src/**/*.ts', ['compile']);
    var watcher = gulp.watch('built/**/*.js', ['test']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
})

gulp.task( 'test' , function() {
	gulp.src("src/tests/**/*.ts")
		.pipe( ts( tsSettings ) );
	return gulp.src("built/tests/**/*.js")
		.pipe( jasmine( {} ) );

});
