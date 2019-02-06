var fs = require('fs');
var words = 'bbb';
fs.readFile( __dirname + '/words.txt', function (err, data) {
	if (err) {
		throw err; 
	}
	// Create array of all english words
	words = data.toString().split("\n");
	// The following extracts out the unusable letters
	// that cannot be made using an (upside-down) calculator
	//var usableLetters = /[oizehasglb]/;
	//var letters = 'abcdefghijklmnopqrstuvwxyz';
	//var unusableLetters = ''; 
	//for (letter of letters) {
	//	if (!letter.match(usableLetters)) {
	//		// This is an unsuable letter
	//		unusableLetters += letter;
	//	}
	//}
	//console.log(unusableLetters);
	var unusableLettersRegEx = /[cdfjkmnpqrtuvwxy]/;
	var longestWord = '';
	for (var word of words) {
		word = word.toLowerCase();
		if (word.match(unusableLettersRegEx)) {
			//console.log(word + ' is not a match');
		}
		else {
			if (longestWord.length < word.length) {
				longestWord = word.trim();
			}
			//console.log(word + ' IS a match');
		}
	}
	console.log("The longest possible English word to make on a calculator is " + longestWord);
	// oizehasglb
	// Find Number equivalent that yield word:
	var letterToNumberMap = new Map([['o', 0], ['i', 1], ['z', 2], ['e', 3], ['h', 4], ['a', 4], ['s', 5], ['g', 6], ['l', 7], ['b', 9], [' ', ' ']]);
	for (const letter of longestWord) {
		console.log(letter);
		console.log('number == ' + letterToNumberMap.get(letter));
	}
	var test = translateToNumbers("hello i");
	console.log("test == " + test);
	function translateToNumbers(word) {
		var numberWord = '';
		for (var index = word.length - 1; index > -1; index--) {
			console.log('number == ' + letterToNumberMap.get(word[index]));
			numberWord += letterToNumberMap.get(word[index]);
		}
		return numberWord;
	}
});


