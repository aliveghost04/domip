var ranges = require('./ipsDom');

function isValidIPAddress(ip) {
	return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(ip);
}

// Convert an IP to bip IP address type
function decimalIP(ip) {
	if (!isValidIPAddress(ip)) throw new Error('Invalid IP Address');
	return ip
		.split('.')
		.map(function (_, __) {
			return Number(_) * (1 << ((3 - __) * 8))
		})
		.reduce(function (r, i) {
			return r + i;
		}, 0);
}

// Check if an IP is dominican
function isDominican(ip) {

	ip = decimalIP(ip);
	for (var i = 0; i < ranges.length; i++) {
		if (ip >= ranges[i][0] && ip <= ranges[i][1]) return true;
	}
	return false;
}

module.exports = {
	convertToDecimalIP: decimalIP,
	isDominican: isDominican
};