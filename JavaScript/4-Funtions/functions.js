// basic function
function MyName() {
    console.log(`My name is Abhishek`);
}
  
MyName();
MyName();
MyName();

console.log('');


// Function with parameter
function greet(myName) {
    console.log(`Hello ${myName}, welcome to our website.`);
}
greet('Abhishek');


// Funtion with 2 parameters
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
console.log(add(2,3));