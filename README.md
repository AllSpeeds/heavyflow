Heavyflow
=========

## Description
Read events from USB (serial port) and publish to AWS SNS.

The real world application for this is reading from six flow meters connected to the lines running from kegs to the tags in a keezer (a freezer kegerator). The flow meters are read by an Arduino Diecimila and a signal sent via USB (serial) to a Raspberry Pi. Using node.js, the pulses are read and sent to AWS SNS.

## Installation
	npm i

## Run
	node index --port <port>

#### Example
	node index --port /dev/tty.usbserial-A4001JUP

### Find USB Device
	ls /dev

### TODO
- Add links
- Add AWS config steps
