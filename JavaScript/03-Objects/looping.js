const userInfo = {
    name: 'Abhishek',
    age: 22,
    email: 'abhishek@gmail.com'
}

for (let x in userInfo) {
    console.log(x);
}



console.log('');
for (let x in userInfo) {
    console.log(userInfo[x]);
}



console.log('');
for (let x in userInfo) {
    console.log(`${x} - ${userInfo[x]}`);
}



console.log('');
for (let x of Object.keys(userInfo)) {
    console.log(x);
}



console.log('');
for (let x of Object.keys(userInfo)) {
    console.log(userInfo[x]);
}