 function say(p_text) {
	console.log(p_text);
}

function getZerosForFactorial(p_facNum, p_isDoubleFac)
{
	// In fact there is a math problem
	// Let a sequence a_k = k \forall k = 1..p_facNum
    // or a sequence a_n = 1 * 3 * 5 * ... * p_facnum (even)
    // or a sequence a_m = 2 * 4 * 6 * ... * p_facnum (odd)
    // ---
    // The amount of zeros equal the amount of 10 in these sequences

    if (p_facNum == 0)
    	p_facNum = 1;
	
	let isFactorialNumOdd = !(p_facNum % 2);

    
    let out_Result = 0;

    if (!p_isDoubleFac || (p_isDoubleFac && isFactorialNumOdd))
    	out_Result = Math.floor(p_facNum/10);

	return out_Result;
}

module.exports = function zeros(p_expression) {
	let out_ZerosCount = 0;

	let pretokenArr = p_expression.match(/\*?\d+!!?/g);

	if (pretokenArr === null)
		return 0;

	
	for(let preToken of Object.values(pretokenArr))
	{
        // Example
        // [ '55!!', '55', '!!', index: 0, input: '55!!', groups: undefined ]

		let num_fac_pair = preToken.match(/(\d+)(!!?)/);
		let num = num_fac_pair[1];
		let isDoubleFac = num_fac_pair[1].length == 2;

		let z = getZerosForFactorial(num,isDoubleFac);
		if (z > 0)
			out_ZerosCount = (out_ZerosCount == 0) ? z : out_ZerosCount * z;

		//say(num_fac_pair);
	}

	return out_ZerosCount;
}
