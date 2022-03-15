const user = {}
user.name = 'Abhishek';
user.age = 23;
user.aboutMe = function(){
    return `My name is ${this.name} and iam ${this.age} years old.`
}
user.favSport = function(sport){
    return `${this.name} loves ${sport}.`
}

console.log(user);
console.log(user.name);
console.log(user.aboutMe());
console.log(user.favSport('Football'));



console.log('');
// 



function users(name, age){
    const user = {};
    user.name = name;
    user.age = age;
    user.aboutMe = function(){
        return `My name is ${this.name} and iam ${this.age} years old.`
    };
    user.favSport = function(sport){
        return `${this.name} loves ${sport}.`
    };
    return user;
}
const user1 = users("Abhishek",23);
console.log(user1);
console.log(user1.favSport("Football"));



console.log('');
// 



const userMethods = {
    aboutMe(){
        return `My name is ${this.name} and iam ${this.age} years old.`
    },
    favSport(sport){
        return `${this.name} loves ${sport}.`
    }
}
function userList(name, age){
    const user = {};
    user.name = name;
    user.age = age;
    user.aboutMe = userMethods.aboutMe;
    user.favSport = userMethods.favSport;
    return user;
}

const player1 = userList("Abhishek",23);
console.log(player1);
console.log(player1.favSport("Football"));



console.log('');
// 



function userList1(name, age){
    const user = Object.create(userMethods);
    user.name = name;
    user.age = age;
    return user;
};
const user01 = userList1("Abhishek",23);
console.log(user01);
console.log(user01.favSport("Football"));



console.log('');
// 



function usersList(name, age){
    const user = Object.create(usersList.prototype);
    user.name = name;
    user.age = age;
    return user;
};
usersList.prototype.aboutMe = function(){
    return `My name is ${this.name} and iam ${this.age} years old.`
}
usersList.prototype.favSport = function(sport){
    return `${this.name} loves ${sport}.`
}

const user10 = usersList("Abhishek",23);
console.log(user10);
console.log(user10.favSport("Football"));



console.log('');
// 



function usersList01(name, age){
    this.name = name;
    this.age = age;
};
usersList01.prototype.aboutMe = function(){
    return `My name is ${this.name} and iam ${this.age} years old.`
}
usersList01.prototype.favSport = function(sport){
    return `${this.name} loves ${sport}.`
}

const user100 = new usersList01("Abhishek",23);
console.log(user100);
console.log(user100.favSport("Football"));



console.log('');
// 



// ES6 - Class
class userList10 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    aboutMe() {
        return `My name is ${this.name} and iam ${this.age} years old.`;
    }
    favSport(sport) {
        return `${this.name} loves ${sport}.`;
    }
};
const user101 = new userList10("Abhishek",23);
console.log(user101);
console.log(user101.favSport("Football"));



console.log('');
// 



// 
const user100Prototypes = Object.getPrototypeOf(user100)
console.log(user100Prototypes);

console.log(user100Prototypes === usersList01.prototype);




console.log('');




for (key in user100){
    console.log(`${key} - ${user100[key]}`);
}

console.log('');
console.log(user100.hasOwnProperty('name'));
console.log(user100.hasOwnProperty('aboutMe'));
console.log('');

for (key in user100){
    if (user100.hasOwnProperty(key)){
        console.log(`${key} - ${user100[key]}`);
    }
}



// 
console.log('');




function asd(){}

console.log(user100 instanceof usersList01);
console.log(user100 instanceof asd);