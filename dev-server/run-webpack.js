var webpack = require('webpack');
var webpackConfig = require('../webpack.config');

var hrstart = process.hrtime();

webpack(webpackConfig, function(err, stats) {
	if(err) console.error(err);
	if(stats.compilation.errors.length) console.error(stats.compilation.errors);
	
	console.log(stats.toString({
		chunks: false,  // Makes the build much quieter
		colors: true    // Shows colors in the console
	}));

	var hrend = process.hrtime(hrstart);
	console.log('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
});