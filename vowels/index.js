// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	return solution2(str);
}

function solution2(str) {
	let count = 0;
	const checker = 'aeiou';
	const input = str.toLowerCase().split('');
	for (let i of input) {
		if (checker.includes(i)) {
			++count;
		}
	}
	return count;
}

function solution1(str) {
	let count = 0;
	const input = str.toLowerCase().split('');
	for (let i of input) {
		if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
			++count;
		}
	}
	return count;
}

module.exports = vowels;
