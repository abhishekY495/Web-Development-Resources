class Person {
    constructor (firstName, lastName, age, sport) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.sport = sport;
    }

    about(){
        return `My name is ${this.firstName} and iam ${this.age} year's old.`
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    get favSport(){
        return `${this.firstName} loves ${this.sport}.`
    }

    set changeFavSport(newFavSport){
        this.sport = newFavSport;
    }

}

const p1 = new Person('Abhishek','Yadav',24,'Football');
console.log(p1);

console.log(p1.firstName);
console.log(p1.about());
console.log(p1.fullName);
console.log(p1.favSport);

console.log('');

p1.changeFavSport='BasketBall';
console.log(p1.favSport);


