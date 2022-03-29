const players = ['Messi','Ronaldo','Neymar','Mbappe','Haaland']

// for loop
for (let i=0; i<players.length; i++) {
    console.log(players[i]);
}

const x=[];
for (let i=0; i<players.length; i++) {
    x.push(players[i].toUpperCase());
}

console.log(x);


console.log('');
// while loop
const fruits = ['apple','orange','banana','watermelon']

let i=0;
while (i<fruits.length) {
    console.log(fruits[i]);
    i++;
}



console.log('');
// do-while loop
i=0
do {
    console.log(fruits[i]);
    i++;
} while (i<fruits.length)




console.log('');
// for of loop
const cars = ['Ferrari','Tesla','BMW','Audi']
for (let car of cars) {
    console.log(car);
}

console.log('');
// for in loop in arrays gives us the index of the items
for (c in cars) {
    console.log(c);
}

console.log('');
// to get elements using for in loop
for (c in cars) {
    console.log(cars[c]);
}





console.log('');