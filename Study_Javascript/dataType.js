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
//자바스크립트에는 2진수, 8진수, 16진수를 표현하는 데이터 타입이 없다
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

//원시 타입과 객체 타입 비교
//원시 값(변경 불가능한 값) <-> 객체(참조) 타입의 값(변경 가능한 값)
//원시 값을 변수에 할당하면 실제 값 저장 <-> 객체 타입에 할당 시 참조 값 저장
//값을 갖는 변수를 다른 변수를 할당시, 원시 값 할당 -> 값에 의한 전달, 객체 값 할당 -> 참조에 의한 전달

//원시 값을 갖는 함수는 재할당 밖에 방법이 없

//유사 배열 객체(array-like object)
//배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다
//문자열은 마치 배열 인덱스처럼 접근이 가능하다
var str = 'string';

console.log(str[0]);

console.log(str.length);//객체처럼 작동한다

str[0] = 'X';

console.log(str);//string -> 생성된 문자열은 읽기 전용 값이므로 변경되지 않는다

str = 'new string';

console.log(str);//new string -> 재할당은 가능함


//값에 의한 전달
var eighty = 80;
var copyEighty = eighty;

console.log(eighty);
console.log(copyEighty);

eighty = 100;

console.log(eighty);
console.log(copyEighty);//다른 공간에 저장된 별도의 값이다
//변수와 같은 식별자는 값이 아니라 주소값을 가지고 있다


//객체는 프로퍼티의 개수가 정해져 있지 않으며, 동적으로 추가되고 삭제될 수 있음
//그러므로 확보해야 할 메모리 공간의 크기를 사전에 정해 둘 수 없다
//자바스크립트 객체는 생성 이후 프로퍼티와 메서드 추가 가능 <-> 자바, C++ 불가능
//자바스크립트의 객체 관리 방식은 비용이 더 많이 든다. 그래서 V8에서는 동적 탐색 대신 히든 클래스라는 방식을 사용
//

const _ = require('lodash');

const o = { x: { y: 1 } };//얕은 복사: 객체를 한 단계만 복사하고 중첩된 객체는 참조 값을 복사

const c1 = { ...o };
console.log(c1 === o);
console.log(c1.x === o.x);

const c2 = _.cloneDeep(o);//깊은 복사: 중첩된 객체를 모두 복사 

console.log(c2 === o);
console.log(c2.x === o.x);



