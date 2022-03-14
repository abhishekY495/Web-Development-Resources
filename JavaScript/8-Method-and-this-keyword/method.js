const myInfo = {
    firstName: "Abhishek",
    age: 23,
    email: 'abhishek@gmail.com',
    aboutme: function () {return `My name is ${this.firstName} and iam ${this.age} years old.`},
    
    courseList: [],
    // shorter syntax for method
    buyCourse(courseName) {this.courseList.push(courseName)},
    getCourseCount() {return `${this.firstName} has enrolled in ${this.courseList.length} courses.`},
}

console.log(myInfo);

console.log('');

console.log(myInfo.firstName);
console.log(myInfo.aboutme);
console.log(myInfo.aboutme());



console.log('');


console.log(myInfo.getCourseCount());

myInfo.buyCourse('HTML and CSS Course');
console.log(myInfo.getCourseCount());

myInfo.buyCourse('Bootstrap Course');
myInfo.buyCourse('Tailwind CSS with Project');
myInfo.buyCourse('Javascript Basics');
console.log(myInfo.getCourseCount());


console.log('');

for(x of myInfo.courseList) {
    console.log(x);
}

console.log('');


// // // // // // // // // //


const info = function() {
    console.log(`My name is ${this.userName} and i love ${this.favSport}.`);
}

const user1 = {
    userName: 'Abhishek',
    favSport: 'Football',
    aboutMe: info
}
const user2 = {
    userName: 'Karan',
    favSport: 'Cricket',
    aboutMe: info
}
const user3 = {
    userName: 'Rohit',
    favSport: 'BasketBall',
    aboutMe: info
}

console.log(user1.aboutMe);

user1.aboutMe();
user2.aboutMe();



console.log('');
console.log('');
console.log('');
console.log('');
// // // // // // // // // //




console.log(this);
console.log('');

let user = {
    userName: 'Abhishek',
    age: 23,
    myInfo() {
        console.log(`My name is ${this.userName} and iam ${this.age} years old.`);
        function hello() {
            console.log('Hello');
            console.log('');
            console.log(this.userName);
            console.log(this);
        }
        hello()
    }
}

console.log(user.userName);
user.myInfo();
