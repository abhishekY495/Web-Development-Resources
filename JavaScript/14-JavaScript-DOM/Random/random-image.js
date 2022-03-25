const button = document.querySelector('#image-btn');
const image = document.querySelector('#image');

button.addEventListener('click', () => {
    image.setAttribute('src',`https://picsum.photos/1100/550/?${Math.floor(Math.random() * 100)}`);
    image.setAttribute('src',`https://source.unsplash.com/random/1100x550?${Math.floor(Math.random() * 100)}`);
})
