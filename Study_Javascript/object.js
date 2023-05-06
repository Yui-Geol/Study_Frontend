//원시 타입(number, string, undefined, null, boolean,symbol)은 변경 불가능한 값
//객체 타입은 변경 가능한 값
//자바스크립트는 원시값을 제외한 모든 값이 객체이다

var person = {
	name: 'Choi',//(name: 'Choi')는 프로퍼티이다
	age: 20//(age(프로퍼티 키): 20(프로퍼티 값))는 프로퍼티이다
};

var counter = {
	num: 0,//프로퍼티:객체의 상태를 나타내는 값(data)
	increase: function () {//메서드:프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(함수)
		this.num++;
	}
};

console.log(counter.num);

counter.increase();

console.log(counter.num);

//인스턴스(instance): 클래스에 의해 생성되어 메모리에 저장된 실체를 말한다
//객체 생성 방법: 객체 리터럴, Object 생성자 함수, 생성자 함수, Object.create 메서드, 클래스(ES6)
//
//객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다
//프로퍼티 키:빈 문자열을 포함하는 모든 문자열 또는 심벌 값, 식별자의 네이밍 규칙을 따르지 않는 경우에 
//따옴표를 사용해야 한다
//프로퍼티 값:자바스크립트에서 사용할 수 있는 모든 값
//
//프로퍼티 값에 접근하는 방법: 1. 마침표(.), 2. 대괄호([])
//대괄호의 경우 프로퍼티 키는 반드시 따옴표로 감싸야한다
//따옴표로 감싸지 않을 경우 ReferenceError가 발생한다
//객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다
//프로퍼티 키 네이밍 규칙: 식별자 네이밍 규칙과 숫자를 제외하면 따옴표를 붙여야함
//프로퍼티 키를 숫자로 할 경우, 값에 접근할 때 대괄호로 접근해야함

console.log(person.name);
console.log(person['name']);

console.log(person.gender);//undefined

//프로퍼티 동적 생성
person.height = 180;

console.log(person);

//프로퍼티 삭제
//존재하지 않는 프로퍼티를 삭제해도 오류가 발생하지 않음
delete person.height;

//프로퍼티 축약 표현: 전역변수의 이름과 지역변수의 이름이 같을 경우 프로퍼티 키를 생략가능
let x = 1, y = 2;

const obj = { x, y };

console.log(obj);

//계산된 프로퍼티 이름: 문자열 또는 문자열 타입으로 변환할 수 있는 값으로 평가되는 표현식을 사용해 
//프로퍼티 키를 동적으로 생성할 수 있음. 대괄호를 사용해야함
var prefix = 'prop';

var i = 0;

var obj1 = {};

obj1[prefix + '-' + ++i] = i;
obj1[prefix + '-' + ++i] = i;
obj1[prefix + '-' + ++i] = i;

let j = 0;

const obj2 = {
	[`${prefix}-${++j}`]: j,
	[`${prefix}-${++j}`]: j,
	[`${prefix}-${++j}`]: j
}
console.log(obj1);
console.log(obj2);

//메서드 축약 표현
const obj3 = {
	name: 'Choi',

	sayHi() {
		console.log('hi!' + this.name);
	}
};

obj3.sayHi();
