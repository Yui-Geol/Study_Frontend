function slow_power(x, n) {
	let result = 1.0;

	for(let i = 0; i < n; i++){
		result *= x;
	}

	return result;
}

function power(x, n) {
	if(n==0) {
		return 1;
	} else if( (n%2) ==0 ) {
		return power(x*x, n/2);
	} else {
		return x*power(x*x, (n-1)/2);
	} 
}

console.time('slow_power');
console.log(slow_power(2,10));
console.timeEnd('slow_power');

console.time('power');
console.log(power(2,10))
console.timeEnd('power');
