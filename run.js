var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
// require the module as normal
var bs = require("browser-sync").create();

// .init starts the server
bs.init({
    server: "."
});

// Now call methods on bs instead of the
// main browserSync module export
//bs.reload("*.html");


function runWebpack() {
	var hrstart = process.hrtime();
	webpack(webpackConfig, function(err, stats) {
		if(err) console.error(err);
		if(stats.compilation.length) console.error(stats.compilation.errors);
		var hrend = process.hrtime(hrstart);
		console.log('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
		bs.reload();
	});
}

runWebpack();
bs.watch('./**/*.tsx').on('change', runWebpack);



