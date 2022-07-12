// console.log('hello world');
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverString('hello) === 'olleh'

const reverseString = (str) => {
	// const strArr = str.split('');
	// strArr.reverse();
	// return strArr.join('');
	// return str.split('').reverse().join('');

	/////////////////////////

	// if they dont to use the .reversed method
	// let revString = '';
	// for (let i = str.length - 1; i >= 0; i--) {
	// 	revString = revString + str[i];
	// }
	// return revString;

	////////////////////////

	// let revString = '';
	// for (let i = 0; i <= str.length - 1; i++) {
	// 	revString = str[i] + revString;
	// }
	// return revString;

	///////// Modern es6 Solution /////////

	// let revString = '';
	// for (let char of str) {
	// 	revString = char + revString;
	// }
	// return revString;

	////////////////////////////

	// let revString = '';
	// str.split('').forEach(function (char) {
	// 	revString = char + revString;
	// });
	// return revString;

	//////////////////////////////

	// let revString = '';
	// str.split('').forEach((char) => (revString = char + revString));
	// return revString;

	/////////////////////////////

	return str.split('').reduce((revString, char) => char + revString, '');
};

const output = reverseString('hello');

console.log(output);
