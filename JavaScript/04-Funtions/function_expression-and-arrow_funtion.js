// Function Expression
const greet2 = function() {
    console.log('Hello World');
}
greet2()



console.log('');



// Arrow Functions
const greet3 = () => {
    console.log('Hello World......');
}
greet3()


const evenOdd = numb => {
    if (numb%2==0) {
        console.log(`${numb} is Even.`);
    } else {
        console.log(`${numb} is Odd.`);
    }
}
evenOdd(7)


const sum2Num = (number1, number2) => {
    console.log(`${number1+number2}`);
}
sum2Num(5,4)


const greet4 = yourName => console.log('Hello',yourName);
greet4('Abhishek')

const greet5 = userName => `Hello ${userName}`;
console.log(greet5('World 🌎'));



console.log('');



const firstString = userString => userString[0];
console.log(firstString('abhishek'));


console.log('');