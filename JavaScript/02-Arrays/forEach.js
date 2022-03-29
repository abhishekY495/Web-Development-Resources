let data = [1,2,3,4,5];

const func1 = (item) => {    
    console.log(item);
}

// forEach
data.forEach(func1);



console.log('');


//
data.forEach(function(item) {
    console.log(item*2);
});



console.log('');


// printing table
let data2 = [1,2,3,4,5,6,7,8,9,10];
data2.forEach( (elem) => {
    tableOf = 4;
    console.log(`${tableOf} x ${elem} = ${tableOf*elem}`);
});



console.log('');



const data3 = [
    {name:'Abhishek', age:22},
    {name:'Rohan', age:23},
    {name:'Amit', age:22},
    {name:'Pratik', age:18}
]

data3.forEach( (user) => {
    console.log(user.name);
});




console.log('');