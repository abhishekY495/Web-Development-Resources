const d = [1,2,3,4];

// destructuring assignment
const [d1,d2,d3] = d;

console.log(d1);
console.log(d2);
console.log(d3);

console.log('');


const e = [1,0,2,3,4,5,6,7];
const [e1, ,e2,e3, ...ext] = e;

console.log(e1);
console.log(e2);
console.log(e3);
console.log(ext);




console.log('');
// Example
const contestants = ['Abhishek','Rahul','Karan','Pratik','John','David','Mike']

const [first, second, third, ...runnerUps] = contestants

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(runnerUps);

console.log('');

console.log(`First 🥇 prize goes to - ${first}`);
console.log(`Second 🥈 prize goes to - ${second}`);
console.log(`Third 🥉 prize goes to - ${third}`);
console.log(`Runner 🏃 ups - ${runnerUps}`);


console.log('');