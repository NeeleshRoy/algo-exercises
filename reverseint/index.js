// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	return solution2(n);
}

function solution1(n) {
	const num = parseInt(n.toString().split('').reverse().join(''));
	return n < 0 ? -num : num;
}

function solution2(n) {
	const num = parseInt(n.toString().split('').reduce((a, b) => (b += a)));
	return n < 0 ? -num : num;
}

module.exports = reverseInt;
