const ingredients = ['milk', 'water', 'tea-leaves', 'coffee-powder', 'sugar'];

// ingredients.pop();

const makeCoffee = new Promise((resolve, reject) => {
    if (ingredients.includes('coffee-powder') && 
        ingredients.includes('sugar') && 
        ingredients.includes('milk')) {
            resolve('Your Coffee is ready.');
            // resolve(true);
        } else {
            reject('Could not make Coffee.');
            // reject(false);
        }
})

console.log(makeCoffee);


console.log('');


// makeCoffee.then(
//     (success)=> {
//     console.log('Is my Coffee ready -', success);
// },  (error)=>{
//     console.log('Is my Coffee ready -', error);
// });

// console.log(1);
// console.log(2);

// setTimeout(()=> {
//     console.log('setTimeout 🕗 function here.');
// }, 0);


// makeCoffee.then(
//     (success)=> {
//     console.log('Is my Coffee ready -', success);
// }).catch((error)=> {
//     console.log('Is my Coffee ready -', error);
// });


// console.log(3);
// console.log(4);


// Function returning Promise
const makeTea = () => {
    return new Promise((resolve, reject) => {
    if (ingredients.includes('tea-leaves') && 
        ingredients.includes('sugar') && 
        ingredients.includes('water')) {
            resolve('Your Tea is ready.');
            // resolve(true);
    } else {
            reject('Could not make Tea.');
            // reject(false);
        }
    });
}

makeTea()
    .then(
    (success)=> {
    console.log('Is my Tea ready -', success);
}).catch((error)=> {
    console.log('Is my Tea ready -', error);
});



// // // // // // // // //


function myPromise(){
    return new Promise((resolve, reject)=>{
        const value = true;
        // const value = false;
        setTimeout(()=>{
            if (value) {
                resolve();
            } else {
                reject();
            }
        })
    })
}

// myPromise()
//     .then(()=>{console.log('Accepted');})
//     .catch(()=>{console.log('Rejected');})


    
// // // // // // // 


const myPromise2 = Promise.resolve(21);
myPromise2.then((value)=>{
    console.log(value);
});

Promise.resolve(50).then((value)=>{
    console.log(value);
});


// // // // // // //


function myPromise3() {
    return new Promise((resolve, reject)=>{
        resolve(10);
    });
}

myPromise3()
    .then((value)=>{
    console.log(value);
    value += 10;
    return value;
}).then((value)=>{
    console.log(value);
    value += 10;
    // return value;
}).then((value)=>{
    console.log(value);
});