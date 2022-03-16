class Player  {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    aboutMe(){
        return `My name is ${this.name} and iam ${this.age} year's old.`
    }

    favSport(sport){
        return `${this.name} loves ${sport}.`
    }
}

const player1 = new Player("Abhishek",23);
const player2 = new Player("Rohan",23);
const player3 = new Player("Karan",24);

console.log(player1);
console.log(player2);
console.log(player2.aboutMe());
console.log(player3.favSport('Football'));


console.log('');


const player4 = new Player();
console.log(player4);




console.log("");
// 




class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.isAdmin = false;
    }

    about(){
        return `My name is ${this.name} and iam ${this.age} year's old.`
    }
}

const user1 = new User('Abhishek',21);
const user2 = new User('Rohan',23);
const user3 = new User('Jayesh',20);
console.log(user1);
console.log(user1.about());


console.log('');


class Admin extends User {
    constructor(name, age){
        super(name, age);
        this.isAdmin = true;
    }
    deleteUser(user){
        userList = userList.filter(x => x.name != user.name);
        console.log(user.name, 'Deleted.');
    }
}


const user4 = new Admin('Karan',30);
console.log(user4);
console.log(user4.about());


console.log('');


let userList = [user1, user2, user3, user4]
console.log(userList);


console.log('');

user4.deleteUser(user2);
console.log(userList);


// user1.deleteUser(user4);




console.log('');