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


// const img = document.querySelector('.image1');
// img.addEventListener('click', () => {
//     console.log(img.getAttribute('src')); 
// })


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

// const darkmodebtn2 = document.querySelector('#darkmode');
// darkmodebtn2.