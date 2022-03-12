const arr2 = [5, 3, 8, 10, 1, 25];
console.log(arr2);

arr2.sort();
console.log(arr2);

/*
By default sort() methods sorts elements in ascending converting the elements into strings,
then comparing their sequences of UTF-16 code units values.
*/
console.log('');


const userNames = ['Mike','Abhishek','Karan','Rohit','Pratik','abc','ABC'];
console.log(userNames);

userNames.sort();
console.log(userNames);



console.log(''); 



arr2.sort((a,b)=>a-b) //ascending
console.log(arr2);

arr2.sort((a,b)=>b-a) //descending
console.log(arr2);



console.log('');



const Products = [
    {productID:1, productName:'Watch', productPrice:850},
    {productID:2, productName:'Mobile', productPrice:30000},
    {productID:3, productName:'HeadPhone', productPrice:5999},
    {productID:4, productName:'Mouse', productPrice:2599}
]
const lowToHigh = Products.slice(0).sort((a,b)=>a.productPrice-b.productPrice)    // Sorting prices high to low
const highToLow = Products.slice(0).sort((a,b)=>b.productPrice-a.productPrice)    // Sorting prices low to high

console.log(Products);
console.log(lowToHigh);
console.log(highToLow);



console.log('');