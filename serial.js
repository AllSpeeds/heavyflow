var argv = require('minimist')(process.argv);
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var portName = argv.port;
var sp = new SerialPort(portName, {
  parser: serialport.parsers.readline("\n")
});

sp.on("open", function () {
	console.log('Opening serial port: ' + portName);
	
	sp.on('data', function(data) {
		console.log(data);
	});
});

function exit() {
	console.log('exiting...');

	process.exit();
}

process.on('SIGINT', exit);
