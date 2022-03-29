function getCamera() {
    console.log('Canon');
}

function getPhoto(camera) {
    camera();
}


// Passing function as argument - callback function
getPhoto(getCamera);

getPhoto( () => {
    console.log('Canon');
});



console.log('');



// Returning function from function
const insideFunc = () => {
    console.log('Inside Function');
}



const returnFunc = () => {
    return insideFunc;
}

const returnFunc2 = () => {
    return function() {
        console.log('Inside Function2');
    };
}

returnFunc()();
returnFunc2()();




console.log('');




const arrIncr = (arr, num) => {
    let result = [];

    for (ar of arr) {
        result.push(ar+num)
    }

    return result;
}

const data = [1,2,3,4]

console.log(arrIncr(data,10));



console.log('');



const incr = (num, pad) => {
    return num+pad;
}
const decr = (num, pad) => {
    return num-pad;
}
const mul = (num, pad) => {
    return num*pad;
}

const arrOpr = (arr, op ,num) => {
    let result = [];

    for (elem of arr) {
        result.push(op(elem,num))
    }

    console.log(result);
}

const data2 = [1,2,3,4,5]

arrOpr(data2,incr,5);
arrOpr(data2,decr,5);
arrOpr(data2,mul,0);




console.log('');