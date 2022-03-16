
console.log(getName);
console.log(getName());
console.log(x);


var x=3;
function getName(){
    return 'Abhishek';
}

console.log('');
console.log(getName);
console.log(getName());
console.log(x);


console.log('');
console.log('');


// function expression and arrow function act as a variable in hoisting.

// this will initialization error
// console.log(getName2());
// console.log(getName3());


const getName2 = function(){
    return 'Abhishek';
}
const getName3 = () => 'Abhishek';


console.log(getName2);
console.log(getName2());
console.log('');
console.log(getName3);
console.log(getName3());