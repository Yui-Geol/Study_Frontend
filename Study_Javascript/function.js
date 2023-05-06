//함수는 입력(input)을 받아 출력(output)을 내보내는 일련의 과정을 뜻한다
//프로그밍에서 함수란 일련의 과정을 문으로 구현하고 코드블록으로 감싸서 하나의 실행단위로 정한것
//즉 특정한 일을 수행하는 코드의 집합이다

//함수를 사용하는 이유
//1.유지보수성
//2.재사용 가능성
//3.높은 가독성
//4.코드의 신뢰성

function remainder(x, y) {
	return x % y;
}//여기까지가 함수의 정의(function definition)
add(6,5);//함수 호출(function call/invoke)
//add: 함수이름
//x,y: 매개변수(parameter)
//x % y: 반환값
//6,5: 인수(argument)

//함수 리터럴
//함수이름
//- 함수 이름은 식별자 -> 식별자 네이밍 규칙 준수
//- 함수 이름은 함수 몸체에서만 참조할 수 있음
//- 함수 이름은 생략가능. 기명 함수(named function), 익명 함수(anonymous fucntion)

//매개변수 목록
//- 0개 이상, 소괄호 감싸기, 쉼표로 구분
//- 매개변수 목록은 순서의 의미가 있음
//- 매개변수도 식별자 네이밍 규칙을 따라야함

//함수 몸체
//- 함수가 호출되었을 떄 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드 블록
//- 함수 몸체는 함수 호출에 의해 실행된다


//함수 정의에는 4가지 방식이 있다: 함수 선언문, 함수 표현식, Function 생성자 함수, 화살표 함수(ES6)

//함수 선언문
//
function add(x,y) {
	return x + y;
}

//함수 표현식
var sub = function (x,y) {
	return x - y;
};

//Function 생성자 함수
var multiply = new Function('x', 'y', 'return x + y');

//화살표 함수(ES6)
var divide = (x,y) => x + y;
