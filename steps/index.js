// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	recursive(n);
}

function recursive(n, row = 0, stair = '') {
	if (n === row) return;
	if (n === stair.length) {
		console.log(stair);
		return recursive(n, row + 1);
	}
	if (stair.length <= row) {
		stair += '#';
	} else {
		stair += ' ';
	}
	recursive(n, row, stair);
}

function iterative(n) {
	for (let row = 0; row < n; row++) {
		const stair = [];
		for (let col = 0; col < n; col++) {
			if (col <= row) {
				stair.push('#');
			} else {
				stair.push(' ');
			}
		}
		console.log(stair.join(''));
	}
}

module.exports = steps;
