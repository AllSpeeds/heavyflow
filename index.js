var Gpio = require('onoff').Gpio;
var gpioNum = 12;
var fmeter = new Gpio(gpioNum, 'in', 'rising');

console.log('Starting to watch for GPIO #' + gpioNum);

fmeter.watch(function(err, value) {
	if(err) {
		exit();
	}

	console.log(value);
});

function exit() {
	console.log('exiting...');
	
	fmeter.unexport();
	process.exit();
}

process.on('SIGINT', exit);
