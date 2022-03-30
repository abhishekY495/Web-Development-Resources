const h1 = document.querySelector('.heading1');
const h2 = document.querySelector('.heading2');
const h3 = document.querySelector('.heading3');
const h4 = document.querySelector('.heading4');
const h5 = document.querySelector('.heading5');
const h6 = document.querySelector('.heading6');
const h7 = document.querySelector('.heading7');
const h8 = document.querySelector('.heading8');


function changeText(element, color, time) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (element) {
                element.textContent = element.textContent.toUpperCase();
                element.style.color = color;
                resolve();
            } else {
                reject(`${element} not found`);
            }
        }, time);
    })
}


// using promises and then
// changeText(h1,'blue',1000)
//     .then(()=>changeText(h2,'violet',1000))
//     .then(()=>changeText(h3,'crimson',1000))
//     .then(()=>changeText(h4,'lime',1000))
//     .then(()=>changeText(h5,'purple',1000))
//     .then(()=>changeText(h6,'orange',1000))
//     .then(()=>changeText(h7,'pink',1000))
//     .then(()=>changeText(h8,'aqua',1000))
//     .catch((error)=>{window.alert(error)})


// using async await
async function doChangeText(){
    await changeText(h1,'blue',1000);
    await changeText(h2,'violet',1000);
    await changeText(h3,'crimson',1000);
    await changeText(h4,'lime',1000);
    await changeText(h5,'purple',1000);
    await changeText(h6,'orange',1000);
    await changeText(h7,'pink',1000);
    await changeText(h8,'aqua',1000);
}
doChangeText();



// above code can also be written as below
// (async function (){
//     await changeText(h1,'blue',1000);
//     await changeText(h2,'violet',1000);
//     await changeText(h3,'crimson',1000);
//     await changeText(h4,'lime',1000);
//     await changeText(h5,'purple',1000);
//     await changeText(h6,'orange',1000);
//     await changeText(h7,'pink',1000);
//     await changeText(h8,'aqua',1000);
// })();