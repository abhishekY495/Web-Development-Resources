const isEven = (x => x%2===0)

// every
const numbers1 = [12,8,4,6];
console.log(numbers1.every(isEven));

const numbers2 = [12,9,4,6];
console.log(numbers2.every(isEven));




console.log('');




const userList = [
    {user1:'Abhishek', userAge:23},
    {user2:'Karan', userAge:18},
    {user3:'Pratik', userAge:22},
    {user4:'Rohit', userAge:23},
    {user5:'Ajay', userAge:20},
]
const above21 = x => x.userAge>21;

console.log(userList.every(above21));

console.log('');


// some
const list1 = [2,7,1,3,5]
console.log(list1.some(isEven));

const list2 = [13,7,1,3,5]
console.log(list2.some(isEven));


console.log('');

console.log(userList.some(above21));





console.log('');