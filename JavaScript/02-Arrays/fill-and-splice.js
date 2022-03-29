const arr0 = [1,2,3,4];
console.log(arr0);

// fill
const arr5 = arr0.fill(0);
console.log(arr5);



console.log('');



const sportsList = ['Football','BasketBall','Cricket','Hockey','Baseball'];
sportsList.fill(0,1,4)

console.log(sportsList);


console.log('');



// splice
const week = ['Sun','Tue','Wed','Thurs','Fri','Sun','Sun','Sat'];
console.log(week);


// insert
week.splice(1,0,'Mon')
console.log(week);


// delete
week.splice(6, 2);
console.log(week);



// deleting and inserting
week.splice(0,week.length,'Jan','Feb','Mar','Apr')
console.log(week);



console.log('');
// getting deleted items
const week2 = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
const days = week2.splice(0, week2.length);
console.log(days);
console.log(week2);