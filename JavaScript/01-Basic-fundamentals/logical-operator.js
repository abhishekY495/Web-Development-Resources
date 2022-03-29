console.log('');
// Logical Operators
// && - and
// || - or
// ! - not

// True and True = True
// True or True = True
// True and False = False
// True or False = True

console.log(10>5 && 10>5);
console.log(10>5 || 10>5);
console.log(10>5 && 10<5);
console.log(10>5 || 10<5);

console.log('');
console.log(!(true));
console.log(!(20=='20'));
console.log(!(20==='20'));



console.log('');
// Example
let userAge = 25;
let userMoney = 80;

if (userAge>=21 && userMoney>=100) {
    console.log('You can enter the Bar.');
}
else if (userAge>=21 && userMoney<=100) {
    console.log('You can enter the Bar but get more money for a drink.');
}
else {
    console.log('You are underage. No Entry.');
}
