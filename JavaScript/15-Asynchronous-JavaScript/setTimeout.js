

console.log(1);
console.log(2);
console.log(3);
console.log(4);



console.log('');
// // // // // // 



console.log(1);
console.log(2);
setTimeout(()=> {
    console.log(3);
}, 1000);
console.log(4);



console.log('');
// // // // // // 



console.log(1);
console.log(2);
setTimeout(()=> {
    console.log(3);
}, 0);
console.log(4);



console.log('');
// // // // // // 



const x = setTimeout(()=> {
    console.log('Yooooo');
}, 0);
console.log('asd',x);


console.log('');


console.log('a');
console.log('b');
const xyz = setTimeout( () => {
    console.log('xyz');
}, 2000);
console.log('c');
clearTimeout(xyz);
console.log('d');

