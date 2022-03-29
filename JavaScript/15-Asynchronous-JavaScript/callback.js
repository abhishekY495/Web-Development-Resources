const posts = [
    {title:'Post 1', body:'This is Post body'},
    {title:'Post 2', body:'This is Post body'},
    {title:'Post 3', body:'This is Post body'}
]

const hr = document.querySelector('.hr');
const div = document.createElement('div');


const getPosts = () => {
    setTimeout(() => {
        let ouput = '';
        posts.forEach(post => {
            ouput += `<li>${post.title}</li>`
        });
        hr.after(div);
        div.innerHTML = ouput;
    }, 2000)
}

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 3000)
} 

getPosts();
createPost({title:'Post 4', body:'This is Post body'}, getPosts);



// // // // // // // // // // 



const hello = document.querySelector('.hello');
const hWorld = document.querySelector('.h-world');
const bye = document.querySelector('.bye');
const bWorld = document.querySelector('.b-world');


setTimeout( () => {
    hello.textContent = hello.textContent.toUpperCase();
    hello.style.color = 'blue';
    setTimeout( () => {
        hWorld.textContent = hWorld.textContent.toUpperCase();
        hWorld.style.color = 'violet';
        setTimeout(()=>{
            bye.textContent = bye.textContent.toUpperCase();
            bye.style.color = 'crimson';
            setTimeout(()=>{
                bWorld.textContent = bWorld.textContent.toUpperCase();
                bWorld.style.color = 'lime';
            }, 1000)
        }, 1000);
    }, 1000);
}, 1000);
