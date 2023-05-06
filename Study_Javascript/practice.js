var name = {
	nice: 'nice',
	hi: {
		hlo: 'hi'
	},
} ;

var copy = name;

console.log(name);


console.log(name.hi);
console.log(Object.getOwnPropertyDescriptors(name));

let person = new Object();

person.name = 'john';

console.log(person);

console.log(Object.getOwnPropertyDescriptors(person));

function Circle(radius) {
	console.log(this);

	this.radius = radius;
	this.getDiameter = function () {
		return 2 * this.radius;
	};
}

const circle1 = new Circle(5);
const circle2 = Circle(10);

console.log(circle1);
console.log(circle2);
console.log(radius);
