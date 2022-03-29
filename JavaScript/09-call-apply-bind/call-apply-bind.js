const printInfo = function(age=24, favSport='Hockey') {
    console.log(`${this.firstName} ${this.lastName} is ${age} and likes ${favSport}.`);
}

const user1 = {
    firstName: "Abhishek",
    lastName: "Yadav",
}
const user2 = {
    firstName: "Elon",
    lastName: "Musk",
}

console.log(user1.firstName);
console.log(user2.lastName);

console.log('');

printInfo.call(user1);
printInfo.call(user2);

console.log('');

printInfo.call(user1, 23, "Football");
printInfo.call(user2, 50, "Bitcoin");



console.log("");
// apply
printInfo.apply(user1, [23, "Football"]);
printInfo.apply(user2, [50, "Bitcoin"]);




console.log('');
// bind
const user1Info = printInfo.bind(user1, 23, "Football");

console.log(user1Info);
user1Info();