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


// Funtion with multiple parameters
function add(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}
add(3,2)

function myInfo(name, birthYear, favSport){
    let age = 2022-birthYear;
    console.log(`My name is ${name}. Iam ${age} years old and i love ${favSport}.`);
}
myInfo('Abhishek',1998,'Football');


console.log('');

function isEven(num) {
    if (num%2==0) {
        console.log(`${num} is Even`);
    } else {
        console.log(`${num} is Odd`);
    }
}
isEven(6)
isEven(7)


console.log('');

function firstChar(word) {
    console.log(word[0]);
}
firstChar('asd')

console.log('');
function findNum(arr, number) {
    if (arr.includes(number)) {
        console.log(`Index of ${number} in [${arr}] is ${arr.indexOf(number)}`);
    } else {
        console.log(`Not found ${number} in [${arr}]`);
    }
}
findNum([11,42,13,40,25,18], 13)
findNum([1,4,35,40,98,55,11], 13)


console.log('');




// Function Expression
const greet2 = function() {
    console.log('Hello World');
}
greet2()


console.log('');
// Arrow Functions