var exec = require('cordova/exec'),
	argscheck = require('cordova/argscheck');

function EmdkScanner () {
	var me = this;

	this.available = false;

	exec(function () {
		me.available = true;
	}, function () {
		me.available = false;
	}, "EmdkScanner", "init", []);
}

EmdkScanner.prototype.startScanning = function (successCallback, errorCallback) {
	argscheck.checkArgs('fF', 'EmdkScanner.startScanning', arguments);
	exec(successCallback, errorCallback, "EmdkScanner", "startScanning", []);
};

EmdkScanner.prototype.stopScanning = function () {
	exec(function () {}, function () {}, "EmdkScanner", "stopScanning", []);
};

module.exports = new EmdkScanner();
