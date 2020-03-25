const isUpperCase = function (text) {
	if (typeof text !== 'string') {
		throw new TypeError('Value must be a string');
	}

	return text === text.toUpperCase();
};

module.exports = isUpperCase;
