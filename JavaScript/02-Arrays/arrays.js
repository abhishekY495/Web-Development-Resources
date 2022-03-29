// An array is a special variable, which can hold more than one value
// An array can hold many values under a single name, and you can access the values by referring to an index number.


const sports = ['Football', 'Basketball', 'Cricket']
console.log(sports);

const a1 = [1, 'abcd', true, '2.5', null, undefined]
console.log(a1);

const arr1 = ['abcd', ['apple','cherry','banana'] , 21, 'Apple']
console.log(`Array in array`, arr1);


console.log(sports[1]);
console.log(typeof sports);
console.log(Array.isArray(sports));





// changing elements
sports[2] = 'Hockey'
console.log(sports);


// Adding elements
sports.push('Cricket');     //  adds at the end of the array
console.log(sports);

sports.unshift('qwe');  // adds at the start of the array
console.log(sports);

sports.push('asd','zxc');     // adding multiple elements
console.log(sports);


// deleting elements
sports.pop();               //deletes the last element
console.log(sports);

let sportsPop = sports.pop();
console.log(sportsPop);

console.log(sports);

sports.shift();
console.log(sports);



/*
push pop is faster as compared to shift unshift because shift-unshift has to reindex the whole array 
while pop simply removes the last element in the array and so the elements do not move.
Therefore push-pop is faster.
*/




// other methods
console.log(sports.length);
console.log(sports.indexOf('Football'));
console.log(sports.includes('Football'));
console.log(sports.includes('Golf'));




console.log('');




// cloning array - using slice and concat.
const ar1 = [1,2,3,4];
const ar2 = ar1;         // This is referencing.  

console.log(ar1);
console.log(ar2);
console.log(ar1===ar2);

ar1.push(5)
console.log(ar1);
console.log(ar2);


console.log('');

// This is cloning
const ary1 = [1,2,3,4];
const ary2 = ary1.slice(0);

console.log(ary1);
console.log(ary2);
console.log(ary1===ary2);

ary1.push(100);
console.log(ary1);
console.log(ary2);


console.log('');


const ary3 = [].concat(ary1);
console.log(ary3);
console.log(ary1===ary3);

ary1.push(200);
console.log(ary1);
console.log(ary3);



console.log('');



// Cloning using spread operator - ...(3 dots)
const r1 = [1,2,3]
const r2 = [...r1]

console.log(r1);
console.log(r2);
console.log(r1===r2);

r1.push(100)

console.log(r1);
console.log(r2);

console.log('');


// adding elements while cloning    

const t1 = [1,2,3];
const t2 = ['one','two','three'];
const t3 = [...t1, ...t2, 4,5,6].concat(7,8,9);

console.log(t1);
console.log(t2);
console.log(t3);

console.log('');


// Use const to create arrays