// Operators

// Arithmetic Operators - used to perform arithmetic on numbers.
let num1 = 10;
let num2 = 5;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2); //Modulus - gives the reaminder of the division
console.log(num1**num2); //Exponentiation 

num1++; // Increment by 1
console.log(num1);

num2--; // Decrement by 1
console.log(num2);


console.log('');
// Assignment Operators - used to assign values to variables
let num = 10;
console.log(num+=2);
console.log(num-=2);
console.log(num*=2);
console.log(num/=2);


console.log('');
// Comparison Operators
let numA = 10;
let numB = 20;
let numC = '20';
let numD = 50;
let numE = 10;

console.log(numA == numB);

console.log(numB == numC);
console.log(numB === numC); // triple equal checks the data type as well when comparing 2 variables.
// Not equal
console.log(numB != numC);
console.log(numB !== numC);

console.log(numA > numD);
console.log(numA < numD);

console.log(numA >= numD);
console.log(numA <= numE);



console.log('');
// Conditional (Ternary) Operator
let myAge = 18;
let checkAge = (myAge >= 18) ? "You can Vote":"You cannot Vote";

console.log(checkAge);



console.log('');