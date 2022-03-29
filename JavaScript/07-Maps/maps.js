const map1 = new Map([
    ['UserID','101'],
    ['UserName','Abhishake21'],
    ['UserAge',23],
    [true,'yes']
])
console.log(map1);



console.log('');


// adding
const person = new Map();
person.set('firstName','Abhishek');
person.set('Age',23);
person.set(1,'one');
person.set(true, 'yes');

console.log(person);


// accessing elemets
console.log(person.get(1));
console.log(person.get('firstName'));
console.log(person.get(true));


console.log('');



// keys and values
console.log(person.keys());
console.log(person.values());


console.log('');


for (let x of person.keys()){
    console.log(x);
}

for (let x of person.keys()){
    console.log(x, typeof(x));
}


console.log('');


// iterating
for (let x of person){
    console.log(x);
}

console.log('');

for (let [key, value] of person){
    console.log(key, value);
}



console.log('');



const aboutMe = {
    firstName:'Abhishek',
    age: 23
}

const moreInfo = new Map();
console.log(moreInfo);

moreInfo.set(aboutMe, {favSport: 'Football', hobby:'Coding'});
console.log(moreInfo);


console.log('');


console.log(aboutMe.firstName);
console.log(moreInfo.get(aboutMe).favSport);