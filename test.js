const test = require('ava');
const isUpperCase = require('.');

test('should return `true` for uppercase inputs', t => {
	t.true(isUpperCase('I'));
	t.true(isUpperCase('AM'));
	t.true(isUpperCase('FINE'));
});

test('should return `false` for lowercase inputs', t => {
	t.false(isUpperCase('i'));
	t.false(isUpperCase('am'));
	t.false(isUpperCase('not'));
	t.false(isUpperCase('fine'));
});

test('should return `false` for mixed case inputs', t => {
	t.false(isUpperCase('ThIs'));
	t.false(isUpperCase('iS'));
	t.false(isUpperCase('SPArta'));
});

test('should throw error for non-string inputs', t => {
	const inputs = [
		123,
		null,
		true,
		undefined,
		{},
		[]
	];

	for (const input of inputs) {
		t.throws(() => {
			return isUpperCase(input);
		}, {
			instanceOf: TypeError
		});
	}
});
