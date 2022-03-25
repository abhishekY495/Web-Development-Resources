const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', () => {
    console.log('You Clicked Me');
    // alert(23);
});


const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function() {
    console.log(this);
});
btn2.addEventListener('click', () => {
    console.log(this);
});


const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', () => {
    alert('You have been Hacked 🐱‍💻');
});


const buttons = document.querySelectorAll('#my-buttons>.btn');
console.log(buttons);


buttons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        console.log(`You Clicked ${btn.textContent}.`);
    });
});




const btnInfo1 = document.querySelector('.btn-info-1');
btnInfo1.addEventListener('click', (event) => {
    console.log(event);
})

const btnInfo2 = document.querySelector('.btn-info-2');
btnInfo2.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
})


const img = document.querySelector('.image1');
img.addEventListener('click', () => {
    console.log(img.getAttribute('src')); 
})


// // // // // // // // //
const darkmodebtn = document.querySelector('#darkmode');

darkmodebtn.addEventListener('click', function() {
    if (this.className === 'btn btn-light') {
        this.className = 'btn btn-dark';
        this.textContent = 'DarkMode On';
        document.body.className = 'p-3 mb-2 bg-light text-dark';
        
    } else {
        this.className = 'btn btn-light';
        this.textContent = 'DarkMode Off';
        document.body.className = 'p-3 mb-2 bg-dark text-white';
    }
});
// // // // // // // // // 

console.log('');
console.log('');


const btn10 = document.querySelector('.btn10');
btn10.addEventListener('click',e => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.type);

    console.log(e.clientX);
    console.log(e.clientY);
    
    console.log(e.offsetX);
    console.log(e.offsetY);
    
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e.ctrlKey);

})





// // // // // // // //



const body = document.body;
body.addEventListener('keypress', e => {
    console.log(e.key);
})


const btn20 = document.querySelector('.btn20');

function showType(e){
    e.preventDefault();
    console.log('Event Type - ', e.type);
}

// btn20.addEventListener('click', showType);
// btn20.addEventListener('dblclick', showType);
// btn20.addEventListener('mousedown', showType);
btn20.addEventListener('mouseup', showType);



const box = document.querySelector('#box');

// box.addEventListener('mouseenter',showType);
// box.addEventListener('mouseleave',showType);

// box.addEventListener('mouseover',showType);
// box.addEventListener('mouseout',showType);

// box.addEventListener('mousemove',showType);

const output = document.querySelector('.output')
box.addEventListener('mousemove',(e)=> {
    output.innerHTML = `<h3>Mouse X - ${e.offsetX}</h3><h3>Mouse Y - ${e.offsetY}</h3>`
    box.style.background = `rgb(${e.offsetX},${e.offsetY},40)`
})

// box.addEventListener('')

const input = document.querySelector('input[type=text]');

// input.addEventListener('keydown',showType)
// input.addEventListener('keyup',showType)
// input.addEventListener('keypress',showType)
// input.addEventListener('focus',showType)
// input.addEventListener('blur',showType)
// input.addEventListener('copy',showType)
// input.addEventListener('paste',showType)
// input.addEventListener('cut',showType)
// input.addEventListener('input',showType)


const form = document.querySelector('form')
form.addEventListener('submit',showType)



// // // // // // //