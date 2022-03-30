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
    // console.log(value); // undefined
});


// // // // // // // // //



const h1 = document.querySelector('.heading1');
const h2 = document.querySelector('.heading2');
const h3 = document.querySelector('.heading3');
const h4 = document.querySelector('.heading4');
const h5 = document.querySelector('.heading5');
const h6 = document.querySelector('.heading6');
const h7 = document.querySelector('.heading7');
const h8 = document.querySelector('.heading8');



// using callbacks
// setTimeout( () => {
//     h1.textContent = h1.textContent.toUpperCase();
//     h1.style.color = 'blue';
//     setTimeout( () => {
//         h2.textContent = h2.textContent.toUpperCase();
//         h2.style.color = 'violet';
//         setTimeout(()=>{
//             h3.textContent = h3.textContent.toUpperCase();
//             h3.style.color = 'crimson';
//             setTimeout(()=>{
//                 h4.textContent = h4.textContent.toUpperCase();
//                 h4.style.color = 'lime';
//                 setTimeout(()=>{
//                     h5.textContent = h5.textContent.toUpperCase();
//                     h5.style.color = 'purple';
//                     setTimeout(()=>{
//                         h6.textContent = h6.textContent.toUpperCase();
//                         h6.style.color = 'orange';
//                         setTimeout(()=>{
//                             h7.textContent = h7.textContent.toUpperCase();
//                             h7.style.color = 'pink';
//                             setTimeout(()=>{
//                                 h8.textContent = h8.textContent.toUpperCase();
//                                 h8.style.color = 'aqua';
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000);
//     }, 1000);
// }, 1000);



// using promise
function changeText(element, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (element) {
                element.textContent = element.textContent.toUpperCase();
                element.style.color = color;
                resolve();
            } else {
                reject(`${element} not found`);
            }
        }, time)
    });
}

// changeText(hello,'blue',1000)
//     .then(()=>{
//     return changeText(hWorld,'violet',1000)
// }).then(()=>{
//     return changeText(bye,'crimson',1000)
// }).then(()=>{
//     return changeText(bWorld,'lime',1000)
// })


// Above code can also be written as below.
changeText(h1,'blue',1000)
    .then(()=>changeText(h2,'violet',1000))
    .then(()=>changeText(h3,'crimson',1000))
    .then(()=>changeText(h4,'lime',1000))
    // .then(()=>changeText(h14,'lime',1000))
    .then(()=>changeText(h5,'purple',1000))
    .then(()=>changeText(h6,'orange',1000))
    .then(()=>changeText(h7,'pink',1000))
    .then(()=>changeText(h8,'aqua',1000))
    .catch((error)=>{window.alert(error)})


// // // // // // // 

const promise1 = Promise.resolve('Accepted 🤝');
const promise2 = 10;
const promise3 = 'Hello World';
const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Bye World 🌎'), 2000);
})

Promise.all([promise1,promise2,promise3,promise4])
    .then(value => console.log(value));



