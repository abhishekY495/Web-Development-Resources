const set1 = new Set([1,2,3,true,'hello']);
console.log(set1);
console.log(typeof(set1));

const set2 = new Set('abcdef');
console.log(set2);



console.log('');



// no duplicate values
const set3 = new Set([1,2,3,1,2,4,5]);
console.log(set3);

// no indexing
console.log(set3[1]);


console.log('');


// adding
const arr1 = ['item1','item2','item3'];

const set4 = new Set();
console.log(set4);

set4.add(1);
set4.add(true);
set4.add(arr1);
set4.add(arr1);
set4.add([1,2,3]);
set4.add([1,2,3]);
set4.add([
    {userName:'Abhishek',userAge:23},
    {userName:'Jayesh',userAge:22},
    {userName:'Rohan',userAge:40},
]);

console.log(set4);



console.log('');



// has - checks if a particular value is present or not by returning a boolean
console.log(set4.has(1));


console.log('');


// Iterating 
const set5 = new Set([1,2,3,4,'five'])
for(i of set5){
    console.log(i);
}


console.log('');


// deleting and clearing
let set5Del5 = set5.delete(5);
console.log(set5Del5);
console.log(set5);


set5Del5 = set5.delete('five');
console.log(set5Del5);
console.log(set5);


set5.clear();
console.log(set5);



console.log('');



// length of set
const userIds = [1,2,3,4,4,5,6,5,6]

const set6 = new Set(userIds);
console.log(set6);

let length=0;
for(x of set6){
    length++;
}

console.log(length);



console.log('');