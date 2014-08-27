var Gpio = require('onoff').Gpio;
var gpioNum = 17;
var fmeter = new Gpio(gpioNum, 'in', 'rising');
var total = 0;

console.log('Starting to watch for GPIO #' + gpioNum);

fmeter.watch(function(err, value) {
	if(err) {
		console.log(err);

		exit();
	}

	total = total + value;
	console.log(total);
});

function exit() {
	console.log('exiting...');

	fmeter.unexport();
	process.exit();
}

process.on('SIGINT', exit);
