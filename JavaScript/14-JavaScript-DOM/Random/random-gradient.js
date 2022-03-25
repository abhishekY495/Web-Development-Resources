const randomColor = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;
}

const gradBtn = document.querySelector('#gradBtn');

gradBtn.addEventListener('click', () => {
    document.body.style.backgroundImage = `linear-gradient(60deg, ${randomColor()}, ${randomColor()}, ${randomColor()})`
});

