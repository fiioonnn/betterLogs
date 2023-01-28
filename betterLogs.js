//
// Made by: @fiioonnn
// Version: 1.0.0
//

const prefix = {
	disconnect: "[%r-%x]",
	connect: "[%g+%x]",
	warn: "[%y!%x]",
	info: "[%bi%x]",
	success: "[%g✓%x]",
	error: "[%r✗%x]",
};

function log(text, ...args) {
	this.codes = {
		r: "\x1b[31m",
		g: "\x1b[32m",
		y: "\x1b[33m",
		b: "\x1b[34m",
		m: "\x1b[35m",
		c: "\x1b[36m",
		w: "\x1b[37m",
		x: "\x1b[0m",
		R: "\x1b[41m",
		G: "\x1b[42m",
		Y: "\x1b[43m",
		B: "\x1b[44m",
		M: "\x1b[45m",
		C: "\x1b[46m",
		W: "\x1b[47m",
		u: "\x1b[4m",
	};
	let output = text.replace(/%[a-zA-Z]/g, (match) => {
		return codes[match[1]];
	});

	args = args.map((arg) => {
		if (typeof arg === "string") {
			return arg.replace(/%[a-zA-Z]/g, (match) => {
				return codes[match[1]];
			});
		} else {
			return arg;
		}
	});

	console.log(`${output}\x1b[0m`, ...args);
}

module.exports = {log, prefix};
