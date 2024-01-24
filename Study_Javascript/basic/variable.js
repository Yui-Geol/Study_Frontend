//ECMAScript(European Computer Manufacturer Association Script)
//모든 브라우저에는 자바스크립트 엔진이 내장되어 있다
//Edge, Chrome: V8 // Safari: JavaScript Core // Firefox: SpiderMonkey

/*
변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름을 말한다
별수에 값을 저장하는 것을 할당(assignment: 대입, 저장)이라고 하고, 변수에 저장된 값을 읽어 들이는 것을 참조(refernec)라고 한다. 변수는 값의 위치를 가리키는 상징적인 이름이다.

변수의 이름을 식별자(identifier)라고 한다. 식별자는 어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말한다
식별자는 어떤 값이 저장되어 있는 메모리 주소를 기억(저장)해야 한다

변수 선언은 소스코드가 순차적으로 실해되는 시점인 런타임 이전에 먼저 실행되지만 값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행된다

변수에 값을 재할당 할 때 메모리의 값을 바꾸는 것이 아니라 메모리에 새로운 값을 바꾸고 그 메모리 주소를 변수에 할당한다

값을 재할당 할 수 없어서 변경할 수 없다면 변수가 아니라 상수(constant)라고 한다

가비지 콜렉터(garbage collector): 애플리케이션이 할당한 메모리 공간을 주기적으로 검사하여 더 이상 사용되지 않는 메모리를 해제하는 기능을 말한다. 더 이상 사용되지 않는 메모리란 간단히 말하자면 어떤 식별자도 참조하지 않는 메모리 공간을 말한다. 자바스크립트는 가비지 콜렉터를 내장하고 있는 매니지드 언어로서 가비지 콜렉터를 통해 메모리 누수를 방지한다
*/

//값(value)
/*
값은 식(표현식expression)이 평가(evaluate)되어 생성된 결과를 말한다. 평가란 식을 해석해서 값을 생성하거나 참조하는 것을 의미한다. 
var sum = 10 + 20 에서 10 + 20은 표현식이다
*/

//리터럴(literal)
/*
리터럴을 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법(notation)을 말한다
정수 리터럴: 100
부동소수점 리터럴: 10.5
2진수 리터럴: 0b100001
8진수 리터럴: 0o101
16진수 리터럴: 0x41
문자열 리터럴: 'hello', "world"
불리언 리터럴: true, false
null 리터럴: null
undefined 리터럴: undefined
객체 리터럴: { name: 'toong', address: 'Ulsan' }
배열 리터럴: [1, 2, 3, 4]
함수 리터럴: function() {}
정규 표현식 리터럴: /[A-Z]+/g
 */

//표현식(expression)
/*
표현식은 값으로 평가될 수 있는 문(statement)이다. 즉, 표현식이 평가되면 새로운 값으로 값을 생성하거나 기존 값을 참조한다
값으로 평가될 수 있는 문은 모두 표현식이다
 */

//문(statement)
/*
문은 프로그램을 구성하는 기본 단위이자 최소 실행 단위이다.
문의 집합으로 이루어진 것이 바로 프로그램이며, 문을 작성하고 순서에 맞게 나열하는 것이 프로그래밍이다
문은 여러 토큰으로 구성된다
토큰(token)이란 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소를 의미한다 
var sum = 1 + 2; 여기에서 토큰은 var/sum/=/1/+/2/;로 6개이다.
문은 명령문이라고도 부른다. 즉, 문은 컴퓨터에 내리는 명령이다. 문이 실행되면 명령이 실행되고 무언가가 일어난다
문은 선언문, 할당문, 조건문, 반복문 등으로 구분할 수 있다
 */

//세미콜론과 세미콜론 자동 삽입 기능
/*
세미콜론은 생략 가능하다. 이는 자바스크립트 엔진이 소스코드를 해석할 때 문의 끝이라고 예측되는 지점에
세미콜론을 자동으로 붙여주는 세미콜론 자동삽입 기능(ASI automatic semicolon insertion)이 암묵적으로 수행되기 때문이다
그렇지만 자동 삽입 기능을 제대로 예측하지 못하여 의도한 것과 다르게 흘러갈 수 있으므르 세미콜론 사용을 권장함
 */

//표현식인 문과 표현식이 아닌 문
/*
표현식인 문과 표현식이 아닌 문을 구별하는 간단하고 명료한 방법은 변수에 할당해보는 것이다.
 */


console.log(test);//undefined

var test = "hello";//test is hoisted before runtime

console.log(test);//hello

console.log(score);

score = 80;
var score; 

console.log(score);

//constant should be assigned the value when declare the constant
//constant cannot be reassigned
const DIGIT = 10;

const apple = {
	name: 'apple',
	color: 'red',
}
console.log(apple.name);//apple
apple.name = 'orange';
console.log(apple.name);//orange. key value can be changed. Because apple store memory address not value

//naming convention

//camel case
var firstName;

//snake case
var first_name;

//pascal case
var FirstName;

//variable and function name ==> camel case
//class and constructor function name ==> pascal case

100//integer literal(decimal)
10.5//Floating-point literal
0b0100001//binary literal
0o10011//octal literal
0x11011//hexadecimal literal
'hello'//string literal
true//boolean literal
null//null literal
undefined//undefined literal
const a = { name: 'choi', adress: 'ulsan' }//object literal
[ 1, 2, 3 ]//array literal
//function(){} function literal
//[A-Z]+/g regular expression literal

//All statement that can be evaluated by value are expressions

const TEN = 10;

console.log(typeof TEN);

console.log("hello");


