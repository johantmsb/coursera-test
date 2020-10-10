/* Lecture 41 */
console.log("LECTURE 41");
 var x = "Hello World!";
 var message = "in global";
 console.log("global: message = " + message);

var a = function () {
var message = "inside a";
console.log("a: message = " + message);

}
 function b () {
   console.log("b: message = " + message); 
  }

 a();
 b();	

/* Lecture 42 */
console.log("");
console.log("LECTURE 42");

 var y;
console.log(y);

if (y == undefined) {
  console.log("y is undefined");
}

y = 5;

if (y == undefined) {
  console.log("y is undefined");
}
else {
  console.log("y has been defined");
}

/* Lecture 43 */
console.log("");
console.log("LECTURE 43");

// ***** String concatination
var string = "Hello";
// string += " World";
string = string + " World";
console.log(string + "!");

// ***** Regular math operators: +, -, *, /
console.log((5 + 4) / 3);
console.log(undefined / 5);
a = 5;
function test1 (a) {
  console.log( a / 5);
}
test1();
test1(a);

// ***** Equality 
var z = 4, y = 4;
if (z == y) {
  console.log("z=4 is equal to y=4");
}

z = "4";
if (z == y) {
  console.log("z='4' is equal to y=4");
}

// ***** Strict equality
if (z === y) {
  console.log("Strict: z='4' is equal to y=4");
}
else {
  console
  .log("Strict: z='4' is NOT equal to y=4");
}

// ***** If statement (all false)
if ( false || null || 
     undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log ("All false");
}

// ***** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}

// ***** Best practice for {} style
// Curly brace on the same or next line...
// Is it just a style?
function d() 
{
  return  
  { 
    name: "Johant"
  };
}

function e() {
  return { 
      name: "Yaakov"
  };
}

console.log(d());
console.log(e());

// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);

var suma = 0;
for (var f = 10; f > 0; f--) {
  console.log(f);
  suma = suma + f;
}
console.log("sum of 0 through 9 is: " + suma);


/* Lecture 44 */
console.log("");
console.log("LECTURE 44");

// Default values
function orderChickenWith(sideDish) {
  sideDish = sideDish || "whatever!";
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

/* Lecture 45 */
console.log("");
console.log("LECTURE 45");

// Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO name is: " 
  + company.ceo.firstName);

console.log(company["name"]);
console.log(company.name); //--Formas de llamar a una propiedad--//

company["stock of company"] = 110;
console.log("Stock price is:" + company["stock of company"])

var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("Stock price is: " + 
  company[stockPropName]);

// Better way: object literal
var facebook = {
  name: "Facebook",
  ceo: {
    firstName: "Mark",
    favColor: "blue"
  },
  "stock of company": 110
};
console.log(facebook);
console.log(facebook.ceo.firstName);

/* Lecture 46 */
console.log("");
console.log("LECTURE 46");

// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
  return x * y;
}
console.log(multiply(5,3));

multiply.version = "v.1.0.0";
console.log(multiply)
console.log(multiply.version);

// Function factory
function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };

  return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments
function doOperationOn(x, operation) {
  return operation(x);
}
var result = doOperationOn(10, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);


/* Lecture 47 */
console.log("");
console.log("LECTURE 47");

// Copy by Reference vs by Value
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);

var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update:");
console.log(a);
console.log(b);

// Pass by reference vs by value
function changePrimitive(primValue) {
  console.log("in changePrimitive...");
  console.log("before:");
  console.log(primValue);
  
  primValue = 5;
  console.log("after:");
  console.log(primValue);
}

var value = 7;
changePrimitive(value); // primValue = value
console.log("after changePrimitive, orig value:");
console.log(value);

function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);
  
  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x: 7 };
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);

/* Lecture 48 */
// Function constructors
console.log("");
console.log("LECTURE 48");

function test() {
	console.log (this);
	this.myName = "Johant";
}
test();
console.log(window.myName);

// Function constructors
function Circle (radius) {
	console.log(this);
	this.radius = radius;
 }

/* No se incluye esta propiedad dentro de la otra función para no tener que llamarla cada vez que se ejecute */
Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  }

var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);
console.log(myOtherCircle.getArea());


/* Lecture 49 */
console.log("");
console.log("LECTURE 49");

// Object literals and "this"
var literalCircle = { //--Esta funcion equivale al new en la función anterior.
  radius: 10,

  getArea: function() {
  	console.log(this);

  	var increaseRadius = function () {
      this.radius = 20;
    };
    increaseRadius();
    console.log(this.radius);

  	return Math.PI * Math.pow(this.radius, 2);
  }
}

console.log(literalCircle.getArea());

// Object literals and "this"
var literalCircle = {
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      self.radius = 20;
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());

console.log("");
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();


/* Lecture 50 */
console.log("");
console.log("LECTURE 50");

// Arrays
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
console.log (array[1]); //--convoco el valor
array[2]("Johant"); //--convoco el valor de la función
array[2](array[0]);
console.log(array[3]);
console.log(array[3].course);

// Short hand array creation
var names = ["Yaakov", "John", "Joe"];
console.log(names);
var names = [
{ name: "Yaakov"},
{ name: "John"},
 "Joe"];
console.log(names);

//Creando un loop para sacar todos los datos de la variable
var names = ["Yaakov", "John", "Joe"];
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

/* Sentencias desde HTML */
console.log("");
console.log("Sentencias desde Index.HTML");