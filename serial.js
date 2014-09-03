var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var sp = new SerialPort("/dev/ttyUSB0", {
  parser: serialport.parsers.readline("\n")
});

sp.on("open", function () {
	console.log('open');
	
	sp.on('data', function(data) {
		console.log('data received: ' + data);
	});
});


function exit() {
	console.log('exiting...');

	process.exit();
}

process.on('SIGINT', exit);
