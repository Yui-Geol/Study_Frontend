//console을 정리
console.clear();

//console로 출력하는 함수
//console.log(내용) console.info(내용), console.warn(경고 내용), console.error(오류 내용)
//터미널에서는 console.log처럼 나옴
//크롬에 확인 추천
const string = 'test';
const number = 2;

console.log(string, number);
console.log("console.log");
console.info("console.info");
console.warn("console.warn");
console.error("console.error");


//console.assert() 첫번째 매개변수가 true일 경우 콘솔에 출력하지 않고
//false일 경우 콘솔에 메시지를 출력
//특정 조건에 메시지가 뜰 수 있도록 디버깅할 때 if문 없이 사용하기 좋음
console.assert(true,"true");//출력안됨
console.assert(false,"false");//출력됨

//console.dir(객체, 옵션{colors : true, depth: 2})
//특정 객체의 속성들을 터미널에서 확인할 수 있음
const obj = {
	outside: {
		inside: {
			key: 'value',
		},
	},
};

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});

//console.time(레이블)
//동작 시간을 측정할 때 사용
//레이블의 내용이 같아야 한다
console.time('시간 측정');
for( var i = 0; i < 1000; i++ ) {
	if( i == 500 ) {
		console.timeLog('시간 측정');//중간에 시간 측정 할 수 있음
	}
	
}
console.timeEnd('시간 측정');

//console.table(배열)
//배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현됨
console.table([{ name: '제로', birth: 1994 }, { name: 'bro', birth: 1888 }]);

//console.trace(레이블)
//에러가 어디서 발생했는지 알 수 있음. 
//일반적으로 에러발생시 위치를 알려주지만, 위치가 나오지 않으면 사용할만 함
function start() {
	middle();
}

function middle() {
	trace();
}

function trace() {
	console.trace('trace');
}

start();

//console.count(내용)
//같은 내용일 경우 몇번 실행되었는지 알수 있음
//console.countReset(내용);
//메세지 카운트를 초기화 함
for(var i = 0; i < 10; i++) {
	console.count('console.count 테스트');
}

console.countReset('console.count 테스트');

console.count('console.count 테스트');
