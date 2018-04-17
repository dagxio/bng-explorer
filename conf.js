/*jslint node: true */
"use strict";

exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.webPort = 4000;

exports.storage = 'sqlite';

exports.initial_witnesses = [
	'CDOIS7YFVQATERZX34B45DJSVLKYEH3D',
	'EGTUS3W655357M4FKIXKDQGUVTQSWNQX',
	'GWBQW2PX6U566BEMGQV7XBWOOMLESCVA',
	'JRNEU7XNVHEVMM4QXWL4ZGTBTMG26UJE',
	'WVSVCI6SPKPNMPRWYY7PXMYQ4LPWZ6X6'
];

exports.initial_peers = [
	'wss://bsure.org/bb'
];

console.log('finished explorer conf');