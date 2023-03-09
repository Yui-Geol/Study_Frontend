//javascript(ES6)는 7가지 데이터 타입을 제공함 
//원시타입:primitive type: number, string, boolean, undefined, null, symbol (single date) copy by value
//객체타입: object, function, array, etc (complex date) copy by reference(momory address)

var integer = 10; //정수
var double = 10.5; //실수
var negative = -10; //음의 정수

var binary = 0b0100;
var binary2 = 0b100;//이진수
var octal = 0o100;//8진수
var hexadecimal = 0x100;//16진수
//javascript doesn't provide data types for expressing binary, octal, or hexadecimal numbers
//so referring to these value, they are expressed in decimal numbers

//javascript treat numbers as float

//javascript is case-sensitive(distinguishing capital letter)
//number type can provide Infinity, -Infinityi, and NaN(not a Number)
console.log(10 / 0);//infinity
console.log( -10 / 0);//-infinity
console.log( 1 * 'string' );//NaN
console.log( Infinity / Infinity );//NaN

//A string enclose the text in single quotes, double quotes, and backticks
//A double quote within a string wrapped in a single quote is recognized as a string
var string;
string = 'hello';
string = "hello";
string = `hello`; 
string = "my name is 'choi'"//my name is 'choi';

//multiline string
console.log(`hello
good day
main`);

//insert expression
var firstName = 'choi';
var lastName = 'yuigeol';
console.log(`My name is` + ` ` + firstName + ` ` + lastName);
console.log(`My name is ${firstName} ${lastName}`);

//boolean type
var handsome = true;
var ugly = false;

//undefined 
var gorani;
console.log(gorani); //undefined

//null(intentional absence)
//if you want to indicate that there is no value in varibale, use null instead of undefined
var money = null;
console.log(money);

//symbol, object type

//The need for dataType
//1.Secure memory space by memory type and reference 
//interpret value by data type

//javascript is dynamic type language
