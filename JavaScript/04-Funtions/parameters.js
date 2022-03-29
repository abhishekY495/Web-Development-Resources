// Default parameters
function add2num(a,b=0) {
    console.log(a+b);
}
add2num(4)
add2num(4,5)


const greet7 = (userName='my friend') => console.log(`Hello ${userName}`);
greet7();
greet7('Abhishek');



console.log("");



// Rest parameters
const func1 = (a,b,...c) => {
    console.log(`${a}`);
    console.log(`${b}`);
    console.log(`${c}`);
}
func1(1,2,3,4,5,6,7,8);


console.log('');


const addAll = (...a) => {
    let total = 0;
    for (let i of a) {
        total = i+total
    };
    console.log(total);
};

addAll(10,3,12,43,2);


console.log('');
