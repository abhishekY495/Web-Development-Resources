const randomColor = () => {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;
}

const colorbtn = document.querySelector('#colorbtn');
const rgbvalue = document.querySelector('#rgb-values');

colorbtn.addEventListener('click', () => {
    let color = randomColor();
    document.body.style.backgroundColor = color;
    rgbvalue.textContent = color;
})
