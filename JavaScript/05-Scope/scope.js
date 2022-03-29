function a() {
    console.log(x);

    const b = () => console.log(x);
    b();

    let y=20;
    const c = () => console.log(y);
    c()
}

let x = 10;
a()

// console.log(y);   // this will give error as y is defined in the function scope of a and not global scope as x.


{
    let myName = 'Abhishek';
    console.log(myName);
}
// console.log(myName); // this will give error as myName is in a block scope.
{
    const myName = 'Abhishek';
    console.log(myName);
}
// console.log(myName);

// var is function scope
{
    var myName = 'Abhishake21';
    console.log(myName);
}
console.log(myName);



console.log('');



if(true){
    let userName = 'Abhishek';
    console.log(userName);
}
// console.log(userName); // error

if(true){
    var userName = 'Hello Abhishek';
    console.log(userName);
}
console.log(userName);



console.log('');



userAge = 12;
const myInfo = () => {
    // userAge = 22;
    console.log(`${userAge}`);
}
myInfo()
