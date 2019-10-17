const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(p_expr) {
	let out_DecodedExpr = '';

	let morseNumericChars = p_expr.match(/.{10}/g);
	let mapMorseChar = {
		'10': '.',
		'11': '-',
		'**': ' '
	};

	for(let morseNumericChar of Object.values(morseNumericChars))
	{
		//say(charCode);
		let morseTraditionalChar = '';

		let morseCodeNumericCodes = morseNumericChar.match(/.{2}/g);

		for(let numCode of Object.values(morseCodeNumericCodes))
		{           
		    let dash_dot = mapMorseChar[numCode];

		    if (dash_dot !== undefined)
				morseTraditionalChar += dash_dot;

			// it is an unusual numCode! ;-)
			if (numCode == '**')
				break;
		}

		// Let's look up a table for a char!
		if (morseTraditionalChar == " ")
			out_DecodedExpr += " "
		else
		{
			out_DecodedExpr += MORSE_TABLE[morseTraditionalChar];
		}
	}

	return out_DecodedExpr;
}

module.exports = {
    decode
}

function say(p_text) {
	console.log(p_text);
}
