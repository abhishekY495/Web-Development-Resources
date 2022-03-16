function x(){
    var a=3;
    function y(){
        console.log(a);
    };
    y();
};
x();


console.log('');


function a(){
    var x=3;
    function b(){
        console.log(x);
    };
    return b;
};

abc = a();
console.log(abc);
abc();

// OR

a()();



console.log('');
// 
function add(num1) {
    function addAgain(num2) {
        return num1+num2;
    }
    return addAgain;
}

let qwe = add(3);
console.log(qwe);
console.log(qwe(4));

// OR

console.log(add(3)(4));



console.log("");



function hello(x){
    const a = 'Value-A';
    const b = 'Value-B';
    return function(){
        console.log(a,b,x);
    };
};
hello()();


console.log('');
// 


function myfunc1(power){
    return (x) => {
        console.log(x**power);;
    };
};


const square = myfunc1(2);
square(3);

const cube = myfunc1(3);
cube(3);

myfunc1(2)(4); // 4*4