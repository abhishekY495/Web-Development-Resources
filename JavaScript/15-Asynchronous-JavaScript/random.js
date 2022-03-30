const btn = document.querySelector('button');

const randomColor1 = setInterval( ()=> {
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
        btn.innerText = `rgb (${red}, ${green}, ${blue})`;
}, 1000);


btn.addEventListener('click', ()=> {
    clearInterval(randomColor1);
    btn.textContent = document.body.style.backgroundColor;
});
