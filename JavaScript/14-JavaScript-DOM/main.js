// console.log(document);
// console.log(document.location);
// console.log(document.head);
// console.log(document.body);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.links);
// console.log(document.images);
// console.log(document.all);
// console.log(document.title);
// // document.title = 'Abhishek';
// // console.log(document.title);


const para = document.querySelector('p');
console.log(para);

const para2 = document.querySelector('.bye');
console.log(para2);

const para3 = document.querySelector('div.bye');
console.log(para3);

const para4 = document.querySelector('#div100');
console.log(para4);



console.log('');



const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[1]);

console.log('');

paras.forEach(para => {
    console.log(para);
});



console.log('');



// get element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by Class name
const bye = document.getElementsByClassName('bye');
console.log(bye);
console.log(bye[0]);

// get elements by Tag name
const gradientImg = document.getElementsByTagName('img');
console.log(gradientImg);
console.log(gradientImg[1]);



console.log('');
console.log('');



const para1 = document.querySelector('p');
console.log(para1.innerText);

para1.innerText = 'Abhishek is Awesome 🤘';



const p2 = document.getElementsByClassName('bye');
console.log(p2);
p2[0].innerText += ' By Abhishek.'     // += to append.



const allParas = document.querySelectorAll('p');
// allParas.forEach(para => {
//     console.log(para);
//     para.innerText = 'Iam Awesome. Lets Goooooooo.';
// });



console.log('');



const div1 = document.querySelector('#div100');
console.log(div1);
console.log(div1.innerText);
console.log(div1.innerHTML);


div1.innerHTML = '<h1>Aloha.</h1>';
div1.innerHTML += '<h2>Aloha.</h2>';


const persons = ['Abhishek','Rohan','Karan','Jayesh'];

persons.forEach(per => {
    div1.innerHTML += `<li>${per}</li>`;
});



console.log('');




// Attributes
const link = document.querySelector('a');
console.log(link);
console.log(link.getAttribute('href'));

link.setAttribute('href','https://abhishake21.com');
link.innerText = 'My Website';
console.log(link.getAttribute('href'));


link.setAttribute('class','my-website-link');
console.log(link.getAttribute('class'));


link.setAttribute('style','color:orange;font-size:3rem');



console.log('');



// Using the above code to style elements will overwrite the styles that you had applied eralier.

const helloAbhi = document.querySelector('h3');
console.log(helloAbhi);
console.log(helloAbhi.style.color);

helloAbhi.style.padding = '3rem 0';
helloAbhi.style.margin = '2rem';
helloAbhi.style.textAlign = 'center';
helloAbhi.style.border = '2px red solid';
helloAbhi.style.fontSize = '2rem';
helloAbhi.style.fontSize = '';     // to remove a style




console.log('');




const content = document.querySelector('span');
console.log(content.classList);

content.classList.add('error');
console.log(content.classList);

content.classList.remove('error');
console.log(content.classList);




// // // // // // //

const listItems = document.querySelectorAll('li.prac');
console.log(listItems);

listItems.forEach(item => {
    if(item.textContent.includes('error')){
        item.classList.add('error');
    } else if (item.textContent.includes('success')) {
        item.classList.add('success');
    };
});

// // // // // // //



console.log('');


const heading = document.querySelector('#page-title');
console.log(heading);

heading.classList.toggle('success');
heading.classList.toggle('success');


console.log('');


// Parent
let itemList = document.querySelector('#items');
console.log(itemList.parentNode);

itemList.parentNode.style.backgroundColor = 'blue';
itemList.parentNode.style.padding = '1rem';

console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

console.log(itemList.parentElement.parentElement);


console.log('');


// Child
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1].innerText);
itemList.children[1].style.backgroundColor = 'gray';


console.log('');


console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.innerText = 'Hello World';

console.log(itemList.lastElementChild);
itemList.lastElementChild.innerText = 'Bye World';

console.log(itemList);



console.log('');



// Sibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
console.log(itemList.previousElementSibling.previousElementSibling);





console.log('');



// Creating Elements
const newDiv = document.createElement('div');

console.log(newDiv);

newDiv.className = 'success';
newDiv.id = 'newDiv1';

newDiv.innerHTML = '<h1>HELLO WORLD 👋</h1>';

console.log(newDiv.children[0].innerText);


const container = document.querySelector('.container');

container.append(newDiv);



// 
console.log('');

const newListItem = document.createElement('li');
newListItem.textContent = 'Item 100';
newListItem.className = 'list-group-item';

console.log(newListItem);

const lists = document.querySelector('#items');
console.log(lists);

// lists.appendChild(newListItem);
// lists.append(newListItem);
lists.prepend(newListItem);



console.log('');



// let lists2 = document.querySelector('.list-group-item:last-child');
// console.log(lists2);

const lists2 = document.querySelector('.list-group-item:nth-child(2)');
console.log(lists2);

const newLi = document.createElement('li');
newLi.textContent = 'Item 8520';
newLi.className = 'list-group-item';
console.log(newLi);

lists2.append(newLi);



// 
const linktoEvents = document.createElement('a');
linktoEvents.href = 'events.html';

const h2Events = document.createElement('h2');
h2Events.textContent = 'Events'

linktoEvents.append(h2Events);

document.body.append(linktoEvents);

document.body.append(document.createElement('br'));
document.body.append(document.createElement('br'));
document.body.append(document.createElement('br'));
// 