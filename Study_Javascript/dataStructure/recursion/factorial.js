function factorial(n) {
	if (n <= 1) {
		console.log(1);
		return 1;
	} else {
		console.log(n);
		return (n * factorial(n-1));
	}
}

console.log(factorial(5));

function factorial_iter(n) {
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result *= i;
	}

	return result;
}

console.log(factorial_iter(5));
