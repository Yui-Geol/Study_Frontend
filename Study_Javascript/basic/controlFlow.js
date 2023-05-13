var hello = Math.floor(5.12345);
console.log(hello);

//block statement/ compound statement

//condition statement
var x = 5;
if (x < 10) {
	x++;
}

console.log(x);

//if ...else statement
if (x > 10){
	x++;
}
else{
	x--;
}

console.log(x);

//conditional statement, conditional expression

//if ... else 

if (x > 5) {
	console.log("conditional expression is true");	
}
else {
	console.log("conditional expression is false");
}

//if ... else if ... else
if (x > 5) {
	console.log("x is bigger than 5");
} else if (x = 5) {
	console.log("x is 5");
} else {
	console.log("x is smaller than 5");
}

//ternary operator

let result;

result = x > 3 ? 'correct' : 'wrong';
console.log(result);

//switch statement

var month = 11;
var monthName;

switch (month) {
	case 1: monthName = 'January';
		break;//If there is no break, fall through is happened
	case 2: monthName = 'Feburary';
		break;
	case 3: monthName = 'March';
		break;
	case 4: monthName = 'April';
		break;
	case 5: monthName = 'May';
		break;
	case 6: monthName = 'June';
		break;
	case 7: monthName = 'July';
		break;
	case 8: monthName = 'August';
		break;
	case 9: monthName = 'September';
		break;
	case 10: monthName = 'October';
		break;
	case 11: monthName = 'November';
		break;
	case 12: monthName = 'December';
		break;
	default: monthName = 'Invalid month';
}

console.log(monthName);

//leap year

var year = 2000;
month = 2;
var days = 0;

switch (month) {
	case 1: case 3: case 5: case 7: case 9: case 11:
		days = 31;
		break;
	case 4: case 6: case 9: case 11:
		days = 30;
		break;
	case 2:
		days = ((year % 4 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
		break;
	default:
		console.log('Invalid month');
}

console.log(days);

//loop statement
//There are three loop statements(for, while, do...while)

//for
for (var i = 0; i < 3; i++) {
	console.log(i);
}//0,1,2

//for(;;){ ...for } infinite loop

//nested for loop
for (i = 0; i < 4; i++) {
	for (j = 0; j < 4; j++) {
		console.log(`${i},${j}`);
	}
}

//while

while (x < 10){ //loop is ended, if conditional statement is false
	console.log(x);
	x++;
}

//while(true){...} infinite loop

//do...while
//This statement execute code block first and then evaluate conditional statement

var count = 0;

do {
	console.log(count);
	count++;
} while (count < 3);


//break statement
foo: {					//foo: {...} label statement
	console.log('1');
	break foo;
	console.log('2');
}

console.log('Done');

var string = 'Have a nice day';
var search = 'i';
var index;

for (i = 0; i < string.length; i++) {

	index = i;
	if (string[i] === search) {
		break;
	}
}

console.log(index);

//continue statement

var count2 = 0;

for (i = 0; i < string.length; i++) {

	if (string[i] !== search) continue;

	count2++;
}

console.log(count);
