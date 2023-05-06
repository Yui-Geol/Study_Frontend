function fib(n) {
	if(n==0) return 0;
	if(n==1) return 1;
	return (fib(n-1) + fib(n-2));
}

function fib_iter(n) {
	if(n==0) return 0;
	if(n==1) return 1;

	let pp = 0;
	let p = 1;
	let result = 0;

	for (i = 2; i <= n; i++) {
		result = p + pp;
		pp = p;
		p = result;
	}

	return result;
}

console.time('fib');
console.log(fib(10));
console.timeEnd('fib');

console.time('fib_iter');
console.log(fib_iter(10));
console.timeEnd('fib_iter');
