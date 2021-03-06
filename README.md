Heavyflow
=========

[![Dependency Status](https://david-dm.org/allspeeds/heavyflow.svg?style=flat)](https://david-dm.org/allspeeds/heavyflow)
[![devDependency Status](https://david-dm.org/allspeeds/heavyflow/dev-status.svg?style=flat)](https://david-dm.org/allspeeds/heavyflow#info=devDependencies)

## Description
Read events from USB (serial port) and publish to AWS SNS.

The real world application for this is reading from six flow meters connected to the lines running from kegs to the tags in a keezer (a freezer kegerator). The flow meters are read by an Arduino Diecimila and a signal sent via USB (serial) to a Raspberry Pi. Using node.js, the pulses are read and sent to AWS SNS.

## Installation

- Install Node Modules with `npm i`
- Configure AWS

#### AWS Config
Replace the X's in the `aws-config.js` with your own values.

## Run
	node index --port <port>

#### Example
	node index --port /dev/tty.usbserial-A4001JUP

#### Find Port with USB Device
	ls /dev

## Sample Data Structure
	{"final":false,"data":{"0":17,"1":0,"2":0,"3":0,"4":0,"5":0}}

	{"final":true,"data":{"0":3349,"1":0,"2":0,"3":0,"4":0,"5":0}}

## TODO
- Add links
