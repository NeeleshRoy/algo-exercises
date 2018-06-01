// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	return solution1(str);
}

solution1 = (str) => {
	const temp = {};
	let max = 0;
	let maxChar = '';

	for (let char of str) {
		if (temp[char]) {
			temp[char]++;
		} else {
			temp[char] = 1;
		}
	}

	for (let char in temp) {
		if (temp[char] > max) {
			max = temp[char];
			maxChar = char;
		}
	}

	return maxChar;
};

module.exports = maxChar;
