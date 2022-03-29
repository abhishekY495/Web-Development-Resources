// functions inside functions
const app = () => {

    function mul(m1,m2) {
        return m1*m2;
    }

    const greet6 = function() {
        console.log(`Bye World`);
    }

    const doubleNum = num1 => num1*2;


    console.log(`Hello World`);
    console.log(mul(3,5));
    greet6();
    console.log(doubleNum(6));  
}

app()



console.log('');
