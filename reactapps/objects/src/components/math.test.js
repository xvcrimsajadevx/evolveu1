import math from "./math";

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.sumAdd(1,2)).toBe(3);
});

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.sumSub(5,2)).toBe(3);
});

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.sumMult(5,3)).toBe(15);
});

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.sumDiv(15,3)).toBe(5);
});
