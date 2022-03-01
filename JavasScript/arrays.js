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

sports.unshift('Baseball');  // adds at the start of the array
console.log(sports);

sports.push('asd','zxc');     // adding multiple elements
console.log(sports);


// deleting elements
sports.pop();               //deletes the last element
console.log(sports);





console.log(sports.indexOf('Football'));
console.log(sports.includes('Football'));
console.log(sports.includes('Golf'));