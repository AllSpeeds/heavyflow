var Gpio = require('onoff').Gpio;
var fmeter = new Gpio('12', 'in', 'rising');

fmeter.watch(function(err, value) {
	if(err) {
		exit();
	}

	console.log(value);
});

function exit() {
	fmeter.unexport();
	process.exit();
}

process.on('SIGINT', exit);
