const arr = [5,3,7,4,2]

const double = x => {
    return x*2;
}

const evenOdd = x => {
    if (x%2===0) {
        return true;
    } else {
        return false;
    }
}


// map
const arrDouble = arr.map(double);
console.log(arrDouble);


const arrEvenOdd = arr.map(evenOdd);
console.log(arrEvenOdd);


const arrTriple = arr.map( x => x*3);
console.log(arrTriple);



console.log('');



// filter
const arrEven = arr.filter(evenOdd);
console.log(arr);
console.log(arrEven);

const isOdd = (x) => {
    return x%2;
}

const arrOdd = arr.filter( x => x%2 );
console.log(arrOdd);


const arrGreaterThan4 = arr.filter( x => x>4);
console.log(arrGreaterThan4);



console.log('');



// reduce
const arrSum = () => {
    let total=0;

    for (elem of arr) {
        total+=elem;
    }

    console.log(total);
}
// this is using for-of loop
arrSum();


// using reduce
const arrSumRdc = arr.reduce( (acc, curr) => {
    acc += curr;
    return acc;
}, 0)

console.log(arrSumRdc);




console.log('');




// finding Max element of an array
// using for-of loop
const arrMax = () => {
    let max=0;
    for (elem of arr){
        if (elem>max) {
            max=elem;
        }
    }
    return max;
}
console.log(arr);
console.log(arrMax());




// using reduce
const arrMaxRdc = arr.reduce( (max, curr) => {
    if (curr>max) {
        max=curr
    }
    return max;
},0)

console.log(arrMaxRdc);





console.log('');



const users = [
    {firstName:'Abhishek', lastName:'Yadav', age:23},
    {firstName:'Rohan', lastName:'Iyer', age:20},
    {firstName:'Amit', lastName:'Kumar', age:22},
    {firstName:'Tim', lastName:'Cook', age:22},
    {firstName:'Elon', lastName:'Musk', age:23},
    {firstName:'Karan', lastName:'Shetty', age:23}
]

const fullName = users.map( i => `${i.firstName} ${i.lastName}`);
console.log(fullName);


const ageCount = users.reduce( (count, user) => {
    if (count[user.age]) {
        count[user.age] = ++count[user.age];
    }
    else { count[user.age]=1; }
    return count;
}, {});
console.log(ageCount);




const ageGroup = users.reduce( (group, user) => {
    if (group[user.age]) {
        group[user.age] += 1;
    } else {
        group[user.age]=1;
    }
    return group
}, {})
console.log(ageGroup);



console.log('');
const userLessThan23 = users.filter(x => x.age<23).map(x => `${x.firstName}-${x.age}`);
console.log(userLessThan23);


// using reduce
const output = users.reduce((lessThan23, user) => {
    if (user.age<23){
        lessThan23.push(`${user.firstName}-${user.age}`)
    }
    return lessThan23;
}, [])
console.log(output);



console.log('');



const data21 = [5,6,9,4,2]
const data21Sum = data21.reduce( (sum, elem) => {

    return sum+elem;
}, 0)

console.log(data21Sum);


console.log('');
const cartItems = [
    {productID:1, productName:'Mobile', productPrice:30000},
    {productID:2, productName:'Watch', productPrice:850},
    {productID:3, productName:'HeadPhone', productPrice:5999},
    {productID:4, productName:'Mouse', productPrice:2599}
]

const cartTotalAmt = cartItems.reduce( (sum, items)=> {
    return sum+items.productPrice;
},0)
console.log(cartTotalAmt);





console.log('');