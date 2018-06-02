// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	return solution1(str);
}

function solution1(str) {
	const t = str.split('');
	t[0] = t[0].toUpperCase();
	for (let i = 0; i < t.length; i++) {
		if (t[i] === ' ') {
			t[i + 1] = t[i + 1].toUpperCase();
		}
	}

	return t.join('');
}

module.exports = capitalize;
