// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	return solution3(str);
}

function solution3(str) {
	return str.split('').reduce((reversed, character) => character + reversed, '');
}

function solution2(str) {
	return str.split('').reverse().join('');
}

function solution1(str) {
	var temp = [];
	var output = '';
	for (var i = 0; i < str.length; i++) {
		temp.push(str[i]);
	}

	temp = temp.reverse();

	for (var i = 0; i < str.length; i++) {
		output += temp[i];
	}

	return output;
}

module.exports = reverse;
