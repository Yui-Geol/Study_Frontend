//type conversion

//explicit coercion or type casting
var x = 10;

var str = x.toString();
console.log(typeof str, str);

console.log(typeof x, x);//x is not changed

1 + '2' // -> "12", convert to string


//implicit coercion  or type coercion
var str = x + '';
console.log(typeof x, x);
