const userInfo = [
    {
    userName:'Abhishek',
    userAge:23,
    userAddress: {roomNo:201, buildingName:'Nice-Apartment-10', pincode:125613}
    },
    {
    userName:'Rohan',
    userAge:23,
    userAddress: {roomNo:803, buildingName:'Nice-Apartment-20', pincode:635213}
    },
    {
    userName:'Jayesh',
    userAge:24,
    // userAddress: {roomNo:504, buildingName:'Nice-Apartment-30', pincode:852063}
    }
]

console.log(userInfo);
console.log(userInfo[1].userName);
console.log(userInfo[0].userAddress);
console.log(userInfo[0].userAddress.roomNo);


console.log('');


console.log(userInfo[2].userAddress);
// console.log(userInfo[2].userAddress.roomNo);
console.log(userInfo[2]?.userAddress?.roomNo);