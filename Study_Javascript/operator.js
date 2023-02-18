//arithmetic operator
// +(Addition), -(Subtraction), *(Multiplication), /(Division), %(Remainder)

5 + 2; // -> 7
5 - 2; // -> 2
5 * 2; // -> 10
5 / 2; // -> 2.5
5 % 2; // -> 1

//unary operator
let x = 4, result;

//postfix increment operator
result = x++;
console.log(result, x); //4, 5

//prefix increment operator
result = ++x; 
console.log(result, x); //6, 6

//postfix decrement operator
result = x--;
console.log(result,x); //6, 5

//prefix decrement operator
result = --x;
console.log(result,x); //4, 4

//reverse sign
let num = 5, rSign;
rSign = -num;
console.log(rSign);// -5
console.log("hello bro");

//concatation operator
'1' + 2; // -> '12'
'hello' + ', world' // -> hello, world

//assignment operator
var ex = 10;

console.log(ex);//10

ex += 10;//ex = ex + 10
console.log(ex);// 20

ex -= 10;//ex = ex - 10
console.log(ex);// 10

ex *= 10;//ex = ex * 10
console.log(ex);//100

ex /= 10;//ex = ex / 10
console.log(ex);//10

ex %= 10;//ex = ex % 10
console.log(ex);//0

//comparison operator
//loose equality and strict equality
var integerFive = 5;
var stringFive = '5';

console.log(integerFive == stringFive);// true(loose equality) compare the value of x and y
console.log(integerFive === stringFive);// false(strict equality) compare the type and value of x and y
console.log(integerFive != stringFive);// false(loose equality)
console.log(integerFive !== stringFive);// true(strict equality)

// >, >=, <=, < result is boolean

//ternary operator
var score = 70;

var isPass = score >= 60 ? 'pass' : 'fail';
console.log(isPass);//if score is under 60, isPass is fail

//logic operator
// ||(or), &&(and), !(not)

//comma operator
var blue, star;

//group operator
var result1 = 10 + 2 * 3// 16
var result2 = (10 + 2) * 3 // 36

//typeof operator
console.log(typeof isPass);//string

//exponent operator
var exponentNum = 2 ** 5;
console.log(exponentNum);//32
var exponentNum2 = Math.pow(2,5);
console.log(exponentNum2);//3
//
//
let text;
text = '1' + 1;// number will be converted to string
console.log(text);
