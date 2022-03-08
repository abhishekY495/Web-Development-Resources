// Destructing
const userInfo = {
    userName: 'Abhishek',
    userAge: 23
}

const myDetails = ({userName, userAge}) => {
    console.log(userName);
    console.log(userAge);
}

myDetails(userInfo)


console.log('');
