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

	for (var word of words) {
		word = word.toLowerCase();
		if (word.match(unusableLettersRegEx)) {
			//console.log(word + ' is not a match');
		}
		else {
			console.log(word + ' IS a match');
		}
	}
});


