// Object is a reference type
// objects are stored in key value pair.

const user1 = {
    name:'Abhishek',
    age:23,
    favSport:'Football',
    favSeries:['Breaking Bad','Silicon Valley','The Office','Mr.Robot'],
    address: {
        street: '21 Main Street',
        city: 'Boston',
        state: 'Dombivli',
        country: 'India'
    }
}
// 'name' is key and 'Abhishek' is its value

console.log(user1);
console.log(typeof user1);


console.log('');
// accessing data - using dot and bracket notation
console.log(user1.name);
console.log(user1.favSeries);
console.log(user1.address);
console.log(user1.address.state);

console.log(user1['name']);
console.log(user1['favSeries']);


console.log('');
// Adding properties
user1.gender = 'Male';
console.log(user1);

user1['favSuperHero'] = 'Ironman';
console.log(user1);


// 
console.log('');
console.log(Object.keys(user1));
console.log(Object.values(user1));



console.log('');