const users = [
    {userID: 101, userEmail: 'abhishek@gmail.com', verifiedEmail: true},
    {userID: 102, userEmail: 'rahul@gmail.com', verifiedEmail: true},
    {userID: 103, userEmail: 'karan@yahoo.in', verifiedEmail: false}
]

console.log(users);

for (let user of users) {
    console.log(user);
}

for (let user of users) {
    console.log(user.userEmail);
}




console.log('');
// destructuring
const [user10, user20, user30] = users;
console.log(user10);
console.log(user20);
console.log(user30);


console.log('');
const [{userEmail:email}, {verifiedEmail:verified}] = users;
console.log(email);
console.log(verified);



console.log('');


// JSON
const todos = [
    {
        id: 1,
        taskName: 'Take out trash',
        completed: true
    },
    {
        id: 2,
        taskName: 'Meeting at 4pm',
        completed: true
    },
    {
        id: 3,
        taskName: 'Dentist Appointment',
        completed: false
    }
]

const todoJSON = JSON.stringify(todos)
console.log(todoJSON);