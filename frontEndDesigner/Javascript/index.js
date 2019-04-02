// Variable is a type of a container we use to store data 

// rules to dexlare variable

// 1. cant start with a number
// 2. case sensitive
// 3. no space in variable names

// var, let , const  are the main variable declarations


// Var can be reassigned 
var a;
a = 50;
var b = 20;

var sum = a + b;

console.log(sum);

// Another way is 
var a, b, sum2;
a = 10;
b = 15;
sum2 = a + b;

console.log(sum2);


// Another way is 
var a = 10,
    b = "Dan",
    sum3 = a + b;

console.log(sum3);

// To write to the console
console.log(10 + 20);


// Variable can have different types of data

var c = "this is a string variable";
console.log(c);


// The below throughs an undefined result cause we didnt declear it
var d;

console.log(d);

// Here we see the browser implesitely declare a variable due to the issues with the var keyword

e = 20;

console.log(e);
// let and const fix this issue


// In javascript we dont need to define what data-type we are using

// Strings
var name = "neni";

console.log(name);

// use of double quotes should only contain singl quotes inside it and vice versa

var work = "I am a web developer, or atleast am becoming one. it's what i like to do this days"

console.log(work);

// We could escape same type quotes as with the "\"

var heSaid = "The landlord said \"You wouls have to leave tonight\"so am guessing you'll need help packing then?"

console.log(heSaid);

var numbersInAString = "12sdsjldjd5"


// Number

var numerics = 20;
var negativeNumber = 10;
var integers = 1.253;


// Boolean
var bool1 = true;
var bool2 = false;

console.log(bool1);
console.log(bool2);


// 1 means thesame as true and 0 as false

var bool3 = 1;
var bool4 = 0;
console.log(bool3);
console.log(bool4);

// null
// is when we tag a variable as nothing

var hey;

console.log(hey);

var nulledHey = null;
console.log(nulledHey);

// To identify the data-type we use the typeof attribute

console.log(typeof bool1);

// OPERATORS

// Assignment operators
// =, +=, *=, /=, %=


// Arithmetic operators
// +, -, *, //, %

// STING OPERATORS

var age = 22;
var info = 'My name is neni and i\'m ' + age + ' years old ' + 10;

console.log(info);

// How to create space between a string of numbers

var numberStrings = 4 + " " + 5;

console.log(numberStrings);