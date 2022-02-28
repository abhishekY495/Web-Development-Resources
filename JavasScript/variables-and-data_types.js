// print in console of browsers
console.log('Hello World');
console.log("Hello World");
console.log("Hello World")
console.log(`Hello World`);

console.warn('warning warning');
console.error('Error');

/* Variables - var, let and const
Variables can store values/data that we can use later.
In modern javascript var is rarely used.
let allows us to change or reassign its value but const does not.
*/

let firstName = 'Abhishek';
const pi = 3.14;

console.log(firstName);
console.log(pi);

firstName = 'Abhi';
console.log(firstName);

// this will give an error cause const values cannot be changed.
// pi = 33
// console.log(pi);

// ---------------------------------------------------------------------------------- //
console.log('');
// Naming variables
//1. Cannot start with a number.
//2. Cannot use spaces.

// Use Camelcase for eg -
// firstName, lastName
// Where first word starts with smallcase letter and then uses capital letter.

// ---------------------------------------------------------------------------------- //

// Primitive Data types
let myName = 'Abhishek';
let age = 23;
let rating = 4.5;
let isCool = true;
let x = null;
let y = undefined;
let z;
let m = NaN;
let n = BigInt(123);
let o = 123n;

// typeof tells us the data type of a variable
console.log(typeof myName);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof m);
console.log(typeof n);
console.log(typeof o);

// This is the max safe integer value you can store in a variable and if want to use greater number than this, use BigInt.
console.log(Number.MAX_SAFE_INTEGER);

console.log('');


// Concatenation
console.log('My name is ' + myName + ' and iam ' + age);

// Template strings or Template literals which uses backticks(`) whih is much cleaner to read in code.
console.log(`My name is ${myName} and iam ${age}`);


console.log('');


// String Methods
const abc = 'Hello World'

console.log(abc.length);
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());
console.log(abc[0]); // Indexing starts with 0
console.log(abc[6]);
console.log(abc[abc.length-1]);
console.log(abc.substring(0,4));
console.log(abc.substring(6).toUpperCase());
console.log(abc.split(''));

const xyz = 'html, css, javascript'
console.log(xyz.split(', '));

const ab = '   Hello World     '
console.log(ab);
console.log(ab.trim());


console.log('');
// converting number to string
const a = 52;
console.log(typeof a);

const b = toString(a);
console.log(typeof b);

