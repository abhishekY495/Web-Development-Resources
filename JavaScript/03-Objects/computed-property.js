let nameKey = 'User-Name'
let mailKey = 'User-email'



const person1 = {
    nameKey: 'Abhishek',
    mailKey: 'abhishek@gmail.com'
}
console.log(person1);



/*
ES6 allows you to use an expression in brackets [].
It’ll then use the result of the expression as the property name of an object.
*/
const person2 = {
    [nameKey]: 'Abhishek',
    [mailKey]: 'abhishek@gmail.com'
}
console.log(person2);



console.log('');