console.log('');



if (true) {
    var varVariable = 'This is Var';
}
console.log(varVariable);


if (true) {
    let letVariable = 'This is Let';
    console.log(letVariable);
}
// console.log(letVariable);


if (true) {
    const constVariable = 'This is Const';
    console.log(constVariable);
}
// console.log(constVariable);


console.log('');
/*
let and const are block scoped while var is function scoped.
*/

/*
You can redeclare var as many times you want but you cant do it with let and const
*/

var varH1 = 'Hellow World 1';
console.log(varH1);

var varH1 = 'Hellow World 2';
console.log(varH1);

console.log('');


let letH1 = 'Hellow World 1';
console.log(letH1);

// let letH1 = 'Hello World 2';
// console.log(letH1);

console.log('');


const constH1 = 'Hellow World 1';
console.log(constH1);

// const constH1 = 'Hellow World 2';
// console.log(constH1);


console.log('');



/*
var allows us to use a varible before we delare it
*/

console.log(t1);

var t1 = 'hellow'
console.log(t1);


console.log('');

/*
const allows you to change only if its an object.
*/