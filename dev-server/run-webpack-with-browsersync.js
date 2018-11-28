// var webpack = require('webpack');
// var webpackConfig = require('./webpack.config');
var bs = require("browser-sync").create();

var spawn = require('child_process').spawn;

// .init starts the server
bs.init({
    server: "."
});

var cp;

function spawnWebpack() {

	try {
		if(cp) {
			cp.kill();
			console.log('kill running webpack');
		}
		
	} catch (e) {
		console.log(e);
	}

	console.log('spawn webpack...');
	cp = spawn('node', ['./dev-server/run-webpack.js']);

	// Listen for any response from the child:
	cp.stdout.on('data', function (data) {
		console.log(data.toString());
	});
	cp.stderr.on('data', function (data) {
		console.log(data.toString());
	});

	cp.on('exit', console.log.bind(console, 'webpack exited'));
	// cp.on('close', console.log.bind(console, 'closed'));
	cp.on('exit', function(exitCode) {
		bs.reload();
	});
}

spawnWebpack();
bs.watch('./src').on('change', spawnWebpack);

process.on('exit', (code) => {
	cp.kill();
});