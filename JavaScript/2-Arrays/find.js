const arr3 = ['hello','World','football','Abhishek'];
console.log(arr3);

const find5 = arr3.find( x => x.length === 5);
console.log(find5);


console.log('');



const users21 = [
    {userID:1, userName:'Abhishek', favSport:'Football'},
    {userID:2, userName:'Karan', favSport:'Football'},
    {userID:3, userName:'Pratik', favSport:'Cricket'},
    {userID:4, userName:'Elon', favSport:'Hockey'},
]
console.log(users21);

const userFootball = users21.find( x => x.favSport === 'Football');
console.log(userFootball);

const userID_3 = users21.find( x => x.userID === 3);
console.log(userID_3);



console.log('');